import { IREnum, IREventArguments, IRType } from "./ir";

export class CodeEmitter {
	static DOCS_ROOT = "https://6cccc716.docs-v2-cib.pages.dev/api";

	static getEnumDocsUrl(name: string): string {
		return `${CodeEmitter.DOCS_ROOT}/enums/${name}/`;
	}

	static getEnumMemberDocsUrl(name: string, subName: string): string {
		return `${CodeEmitter.DOCS_ROOT}/enums/${name}#${subName}`;
	}

	static getTypeDocsUrl(name: string): string {
		return `${CodeEmitter.DOCS_ROOT}/types/${name}/`;
	}

	static getTypeMemberDocsUrl(name: string, subName: string): string {
		return `${CodeEmitter.DOCS_ROOT}/types/${name}#${subName}`;
	}

	static resolveType(type: string): string {
		// TODO: resolve these types properly if possible
		if (type === "function" || type === "table" || type === "buffer") type = "any";
		if (type.endsWith("Enum")) {
			return `Enums["${type.slice(0, -4)}"]`;
		}

		if (type.startsWith("{") && type.endsWith("}")) {
			return `Array<${this.resolveType(type.split("{")[1].split("}")[0].trim())}>`;
		}

		return type;
	}

	static resolveArgument(a: IREventArguments): string {
		let name = a.Name;
		if (name === "...") name = "...args";
		return `${name}: ${CodeEmitter.resolveType(a.Type)}`;
	}

	text = "";

	super() {}

	emit(text = "") {
		this.text += `${text}\n`;
	}

	indentStr(n: number): string {
		return "\t".repeat(n);
	}

	emitDocumentationFor(obj: { Description: string }, docs: string, indent: number) {
		this.emit(`${this.indentStr(indent)}/**`);
		let fields = [`[Documentation](${docs})`];
		if (obj.Description !== "") fields = [obj.Description, ...fields];
		fields.forEach(field => this.emit(`${this.indentStr(indent)} * ${field}`));
		this.emit(`${this.indentStr(indent)} */`);
	}

	emitEnum(enm: IREnum) {
		this.emit(`\t/**`);
		let fields = [`[Documentation](${CodeEmitter.getEnumDocsUrl(enm.Name)})`];
		if (enm.Description !== "") fields = [enm.Description, "", ...fields];
		fields.forEach(field => this.emit(`\t * ${field}`));
		this.emit(`\t */`);

		const names = [enm.Name];
		const internalName = enm.InternalName.split("Enum")[0];
		if (enm.Name !== internalName) names.push(internalName);
		for (const name of names) {
			this.emit(`\texport namespace ${name} {`);
			enm.Options.forEach(prop => {
				this.emitDocumentationFor(enm, CodeEmitter.getEnumMemberDocsUrl(name, prop.Name), 2);
				this.emit(`\t\texport interface ${prop.Name} extends globalThis.EnumItem {}`);
				this.emit(`\t\texport const ${prop.Name}: ${prop.Name};`);
			});
			this.emit(`\t}`);

			this.emit(`\texport type ${name} = ${enm.Options.map(option => `${name}.${option.Name}`).join(" | ")};`);
		}
	}

	emitType(type: IRType) {
		this.emit(`interface ${type.Name}${type.BaseType !== null ? ` extends ${type.BaseType}` : ""} {`);
		this.emit(`\t/**
\t * **DO NOT USE!**
\t *
\t * This field exists to force TypeScript to recognize this as a nominal type
\t * @hidden
\t * @deprecated
\t */
\treadonly _nominal_${type.Name}: unique symbol;`);

		type.Events.forEach(event => {
			this.emitDocumentationFor(event, CodeEmitter.getTypeMemberDocsUrl(type.Name, event.Name), 1);
			const args = event.Arguments.map(CodeEmitter.resolveArgument).join(", ");
			this.emit(`\treadonly ${event.Name}: Event<(${args}) => void>;`);
		});

		type.Properties.forEach(prop => {
			this.emitDocumentationFor(prop, CodeEmitter.getTypeMemberDocsUrl(type.Name, prop.Name), 1);
			this.emit(`\t${prop.IsReadOnly ? "readonly " : ""}${prop.Name}: ${CodeEmitter.resolveType(prop.Type)};`);
		});

		type.Methods.forEach(method => {
			const parameterList = [
				{
					Name: "this",
					Type: type.Name,
					DefaultValue: null,
					IsOptional: false,
				},
				...method.Parameters,
			];
			const parameters = parameterList.map(
				p => `${p.Name}: ${CodeEmitter.resolveType(p.Type)}${p.IsOptional ? " | undefined" : ""}`,
			);
			const returnType =
				method.ReturnType && method.ReturnType !== "nil" ? CodeEmitter.resolveType(method.ReturnType) : "void";
			this.emitDocumentationFor(method, CodeEmitter.getTypeMemberDocsUrl(type.Name, method.Name), 1);
			this.emit(`\t${method.Name}(${parameters}): ${returnType};`);
		});

		this.emit(`}`);
		this.emit();
	}
}
