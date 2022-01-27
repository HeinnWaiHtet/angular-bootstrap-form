import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidator{
    static checkOldPassword(control : AbstractControl) : Promise<ValidationErrors | null>
    {
        return new Promise((resolve) =>{
            setTimeout(() => {
                if(control.value !== '1234')
                    return resolve({checkOldPassword : true});
                else
                  return resolve(null);
            }, 2000);
        });
    }

    static checkPasswordMismatch(control : AbstractControl) :  ValidationErrors| null{
        let newPassword = control.get('newPassword');
        let oldPassword = control.get('oldPassword');
        if(newPassword !== oldPassword)
         return ({checkPasswordMismatch : true});
        return null;
    }
}