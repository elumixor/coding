import { Injectable } from "@angular/core";
import { DataType, NumberDataType, StringDataType } from "../core/data-type";
import { Func } from "../core/function/func";

/**
 * This service represents a collection of functions,
 * and allows their management.
 */
@Injectable({
    providedIn: "root",
})
export class FuncService {
    readonly funcs: Func[];

    protected _dataTypes = [
        NumberDataType,
        StringDataType,
    ];

    constructor() {
        const mainFunc = new Func("main");
        this.funcs = [mainFunc];
    }

    get dataTypes(): readonly DataType[] {
        return this._dataTypes;
    }

    getFunc(name: string) {
        return this.funcs.find((func) => func.name === name);
    }

    getDataType(name: string) {
        return this.dataTypes.find((dataType) => dataType.name === name);
    }
}
