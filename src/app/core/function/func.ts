import { DataType } from "../data-type";
import { FuncStatement } from "./statements";

export class FuncInput {
    constructor(public name: string, public dataType: DataType) {}
}

export class FuncOutput {
    constructor(public name: string, public dataType: DataType) {}
}

export class FuncBody {
    statements: FuncStatement[] = [];
}

/**
 * Out basic building  block of the application
 */
export class Func {
    readonly inputs: FuncInput[] = [];
    readonly outputs: FuncOutput[] = [];
    readonly body = new FuncBody();

    constructor(public name: string) {}
}
