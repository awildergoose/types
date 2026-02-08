import { readdir } from "node:fs/promises";

import { YAML } from "bun";

import { type IR, IREnumSchema, IRSchema, IRTypeSchema } from "./ir";
import { CodeEmitter } from "./code_emitter";

const ROOT = `${__dirname}/../docs-site/yaml`;
const ENUMS = `${ROOT}/enums`;
const TYPES = `${ROOT}/types`;

const ir: IR = { enums: [], types: [] };

let start = Bun.nanoseconds();

const enumFiles = await readdir(`${ENUMS}`, { recursive: true });
for (const file of enumFiles) {
	const text = await Bun.file(`${ENUMS}/${file}`).text();
	const parsed = IREnumSchema.parse(YAML.parse(text));
	ir.enums.push(parsed);
}

const typeFiles = await readdir(`${TYPES}`, { recursive: true });
for (const file of typeFiles) {
	const text = await Bun.file(`${TYPES}/${file}`).text();
	const parsed = IRTypeSchema.parse(YAML.parse(text));
	ir.types.push(parsed);
}

const fullIR = IRSchema.parse(ir);
console.log(`Parsed IR in ${((Bun.nanoseconds() - start) / 1e9).toFixed(3)}s!`);
start = Bun.nanoseconds();

const emitter = new CodeEmitter();
emitter.emit(`// Auto-generated typedefs for polytoria!
type Enums = typeof Enum;

interface EnumItem {}
interface Enum {}
`);

emitter.emit("declare namespace Enum {");
for (const enm of fullIR.enums) emitter.emitEnum(enm);
emitter.emit("}");

emitter.emit();

for (const type of fullIR.types) emitter.emitType(type);

console.log(`Emitted code in ${((Bun.nanoseconds() - start) / 1e9).toFixed(3)}s!`);

await Bun.file("include/polytoria.d.ts").write(emitter.text);
