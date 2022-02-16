import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from "@angular/core";
import { Func, FuncInput } from "../../core/function/func";
import { FuncService } from "../../services/func.service";
import { DataType } from "../../core/data-type";
import { StatementType } from "../../core/function/statements";

@Component({
    selector: "app-func",
    templateUrl: "./func.component.html",
    styleUrls: ["./func.component.scss"],
})
export class FuncComponent implements OnInit {
    @Input() name = "";
    @ViewChild("inputDataType") inputDataType?: ElementRef;
    @ViewChild("inputName") inputName?: ElementRef;

    func?: Func;
    popup?: "input" | "statement";

    constructor(@Inject(FuncService) private readonly funcService: FuncService) { }

    get dataTypes() {
        return this.funcService.dataTypes;
    }

    get statementTypes() {
        return StatementType;
    }

    ngOnInit(): void {
        this.func = this.funcService.getFunc(this.name);
    }

    addInput(name: string, dataType: string) {
        this.func?.inputs.push(new FuncInput(name, this.funcService.getDataType(dataType) as DataType));
    }

    closePopup(discard = false) {
        // Just close the popup if discard is true
        if (discard) {
            this.popup = undefined;
            return;
        }

        // Input name
        const name = this.inputName?.nativeElement.value as string;

        // Input data type
        const input = this.inputDataType?.nativeElement as HTMLSelectElement;
        const dataType = input.value as string;

        // Add input
        this.addInput(name, dataType);

        // Close popup
        this.popup = undefined;
    }

    removeInput(input: FuncInput) {
        this.func?.inputs.remove(input);
    }

    addStatement() {
        this.popup = "statement";
        // this.func?.body.statements.push(new FuncStatement());
    }
}
