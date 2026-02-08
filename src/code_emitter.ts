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

	emitDocumentationFor(obj: { Description: string }, docs: string, indent: number, attributes?: Array<string>) {
		this.emit(`${this.indentStr(indent)}/**`);
		let fields = [`[Documentation](${docs})`];
		if (obj.Description !== "") fields = [obj.Description, ...fields];
		fields = [...fields, ...(attributes ?? [])];
		fields.forEach(field => this.emit(`${this.indentStr(indent)} * ${field}`));
		this.emit(`${this.indentStr(indent)} */`);
	}

	emitEnum(enm: IREnum) {
		this.emitDocumentationFor(enm, CodeEmitter.getEnumDocsUrl(enm.Name), 1);

		const baseName = enm.Name;
		const internalName = enm.InternalName.split("Enum")[0];

		this.emit(`\texport namespace ${baseName} {`);
		enm.Options.forEach(prop => {
			this.emitDocumentationFor(prop, CodeEmitter.getEnumMemberDocsUrl(baseName, prop.Name), 2);
			this.emit(`\t\texport interface ${prop.Name} extends globalThis.EnumItem {}`);
			this.emit(`\t\texport const ${prop.Name}: ${prop.Name};`);
		});
		this.emit(`\t}`);

		this.emit(
			`\texport type ${baseName} = ${enm.Options.map(option => `${baseName}.${option.Name}`).join(" | ")};`,
		);
		if (enm.Name !== internalName) {
			this.emit(`\texport import ${internalName} = ${baseName};`);
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
			if (!prop.IsAccessibleByScripts) return;
			this.emitDocumentationFor(
				prop,
				CodeEmitter.getTypeMemberDocsUrl(type.Name, prop.Name),
				1,
				prop.IsObsolete ? ["@deprecated"] : [],
			);
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
			const parameters = parameterList
				.map(p => `${p.Name}: ${CodeEmitter.resolveType(p.Type)}${p.IsOptional ? " | undefined" : ""}`)
				.join(", ");
			const returnType =
				method.ReturnType && method.ReturnType !== "nil" ? CodeEmitter.resolveType(method.ReturnType) : "void";
			this.emitDocumentationFor(method, CodeEmitter.getTypeMemberDocsUrl(type.Name, method.Name), 1);
			this.emit(`\t${method.Name}(${parameters}): ${returnType};`);
		});

		this.emit(`}`);
		this.emit();
	}
}
