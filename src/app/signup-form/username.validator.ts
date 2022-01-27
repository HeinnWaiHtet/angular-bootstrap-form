import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UseNameValidator{
    static cannotContainSpace(control : AbstractControl) : ValidationErrors | null{
        if((control.value as String).indexOf(' ') >= 0){
            return {
                cannotContainSpace : true
            };
        }
        return null;
    }

    static uniqueName(control :AbstractControl) : Promise<ValidationErrors | null>{
        return new Promise((resolve , reject) => {
            setTimeout(() => {
                if(control.value === 'hein')
                    return resolve({uniqueName : true});
                else
                    return resolve(null);
            }, 2000);
        });
    }
}