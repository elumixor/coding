import { DataType, NumberDataType, StringDataType } from "../../data-type";
import { FuncOutput } from "../func";

export class FuncStatement {
}

// This can be just "5", "hello world", function return value, etc.
class Value {
    constructor(public dataType: DataType) {}
}

class PrimitiveValue extends Value {}

export class NumberValue extends PrimitiveValue {
    constructor(public value: number) {
        super(NumberDataType);
    }
}

export class StringValue extends PrimitiveValue {
    constructor(public value: string) {
        super(StringDataType);
    }
}

export class FuncReturnValue extends Value {
    constructor(funcOutput: FuncOutput) {
        super(funcOutput.dataType);
    }
}

export class VariableValue extends Value {
    constructor(variable: Variable) {
        super(variable.dataType);
    }
}

export class Operator {
    constructor(readonly displayString: string) {}
}

export const AddOperator = new Operator("+");
export const SubtractOperator = new Operator("-");
export const MultiplyOperator = new Operator("*");
export const DivideOperator = new Operator("/");
export const EqualOperator = new Operator("==");
export const NotEqualOperator = new Operator("!=");
export const LessThanOperator = new Operator("<");
export const LessThanOrEqualOperator = new Operator("<=");
export const GreaterThanOperator = new Operator(">");
export const GreaterThanOrEqualOperator = new Operator(">=");
export const AndOperator = new Operator("and");
export const OrOperator = new Operator("or");
export const NotOperator = new Operator("not");

export class OperationReturnValue {
    constructor(values: Value[], operators: Operator[]) {}
}

export class VariableDeclarationStatement {
    constructor(public name: string, public dataType: DataType, initialValue: Value) {}
}

export class Variable {
    constructor(public name: string, public dataType: DataType) {}
}

export class ReassignmentStatement {
    constructor(variable: Variable, value: Value) {}
}

export class Expression {

}

