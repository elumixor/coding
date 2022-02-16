/**
 * Each variable has a data type
 */
export class DataType {
    // later we can also add some more nice things like
    // color, description, etc.
    constructor(readonly name: string) { }
}

/**
 * Built-in data types
 */
export class PrimitiveDataType extends DataType {
    // these shouldn't be extended?
}

export const StringDataType = new PrimitiveDataType("string");

// We should probably allow subtyping for the Number type as Int, Float or Double
export const NumberDataType = new PrimitiveDataType("number");


/**
 * User-created data types
 */
export class CustomDataType extends DataType {
}
