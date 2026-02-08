import { IREnum, IRType } from "./ir";

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

	text = "";

	super() {}

	emit(text = "") {
		this.text += `${text}\n`;
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
				this.emit(`\t\t/**`);
				let fields = [`[Documentation](${CodeEmitter.getEnumMemberDocsUrl(name, prop.Name)})`];
				if (enm.Description !== "") fields = [enm.Description, "", ...fields];
				fields.forEach(field => this.emit(`\t\t * ${field}`));
				this.emit(`\t\t */`);

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

		type.Properties.forEach(prop => {
			this.emit(`\t${prop.IsReadOnly ? "readonly " : ""}${prop.Name}: ${CodeEmitter.resolveType(prop.Type)};`);
		});

		this.emit(`}`);
		this.emit();
	}
}
