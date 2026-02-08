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

		this.emit(`\texport namespace ${enm.Name} {`);
		enm.Options.forEach(prop => {
			this.emit(`\t\t/**`);
			let fields = [`[Documentation](${CodeEmitter.getEnumMemberDocsUrl(enm.Name, prop.Name)})`];
			if (enm.Description !== "") fields = [enm.Description, "", ...fields];
			fields.forEach(field => this.emit(`\t\t * ${field}`));
			this.emit(`\t\t */`);

			this.emit(`\t\texport interface ${prop.Name} extends globalThis.EnumItem {}`);
			this.emit(`\t\texport const ${prop.Name}: ${prop.Name};`);
		});
		this.emit(`\t}`);
		this.emit(
			`\texport type ${enm.Name} = ${enm.Options.map(option => `${enm.Name}.${option.Name}`).join(" | ")};`,
		);
	}

	emitType(type: IRType) {}
}
