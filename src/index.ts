import { readdir } from "node:fs/promises";

import { YAML } from "bun";

import { CodeEmitter } from "./code_emitter";
import { type IR, IREnumSchema, IRSchema, IRTypeSchema } from "./ir";

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
emitter.emit(`/// <reference path="lua.d.ts" />
/// <reference types="@rbxts/compiler-types" />
// Auto-generated typedefs for polytoria!
type Enums = typeof Enum;

interface EnumItem {}
interface Enum {}

interface Event<T extends Callback = Callback> {
	Connect(this: Event, callback: T): void;
	Disconnect(this: Event, callback: T): void;
}

declare const SharedTableNominal: unique symbol;
type SharedTableValue = boolean | number | Vector3 | string | SharedTable | Instance | typeof SharedTableNominal;

// SharedTable
interface SharedTable {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_SharedTable: typeof SharedTableNominal;
	[K: string | number]: SharedTableValue;
}

// type
interface CheckablePrimitives {
	nil: undefined;
	boolean: boolean;
	string: string;
	number: number;
	table: object;
	userdata: unknown;
	function: Callback;
	thread: thread;
	vector: Vector3;
	// buffer: buffer;
}

/**
 * Returns the type of its only argument, coded as a string.
 * Polytoria datatypes will return "userdata" when passed to this function. You should use Polytoria's typeOf() function if you want to differentiate between Polytoria datatypes.
 */
declare function type(value: unknown): keyof CheckablePrimitives;

/** The strings which can be returned by typeOf and their corresponding types */
interface CheckableTypes extends CheckablePrimitives {

}

declare const script: Script;`);

for (const type of fullIR.types) {
	let varname = type.StaticAlias || type.Name;
	if (type.Name === "CreatorGUI") varname = "CreatorGUI";
	if (type.IsStatic) emitter.emit(`declare const ${varname}: ${type.Name};`);
}

// TODO Instances type (`ClassName`s)

emitter.emit("declare namespace Enum {");
for (const enm of fullIR.enums) emitter.emitEnum(enm);
emitter.emit("}");

emitter.emit();

for (const type of fullIR.types) emitter.emitType(type);

console.log(`Emitted code in ${((Bun.nanoseconds() - start) / 1e9).toFixed(3)}s!`);

await Bun.file("include/polytoria.d.ts").write(emitter.text);
