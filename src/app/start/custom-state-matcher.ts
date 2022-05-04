import { AbstractControl, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

export class CustomErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(
        control: AbstractControl | null, 
        form: FormGroupDirective | NgForm | null): boolean {
            console.log(control, form);
            return true;
    }
}