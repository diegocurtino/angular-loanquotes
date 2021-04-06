import { AbstractControl, ValidationErrors } from "@angular/forms";

export class AmountValidators {
    static mustBeAtLeastOneHundred(control : AbstractControl) : ValidationErrors | null {
        if (control.value < 100) {
            return { mustBeAtLeastOneHundred : true };
        }
        return null;
    }

    static mustBeAtMostOneThousandFiveHundred(control : AbstractControl) : ValidationErrors | null {
        if (control.value > 1500) {
            return { mustBeAtMostOneThousandFiveHundred : true };
        }
        return null;
    }

    static mustBeMultipleOfOneHundred(control : AbstractControl) : ValidationErrors | null {
        if (control.value == "" || control.value % 100 != 0) {
            return { mustBeMultipleOfOneHundred : true };
        }
        return null;
    }
}