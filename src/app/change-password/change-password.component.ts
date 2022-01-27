import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from './password.validator';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
 form;
 constructor(fb : FormBuilder){
   this.form = fb.group({
     oldPassword : fb.control(
       '',
       [
         Validators.required,
         PasswordValidator.checkOldPassword
        ]),
     newPassword : fb.control('',Validators.required),
     confirmPassword : fb.control('',Validators.required)
   },
   {
     validator : PasswordValidator.checkPasswordMismatch
   });
 }

 get oldPassword (){
   return this.form.get('oldPassword');
 }
 
 get newPassword (){
  return this.form.get('newPassword');
} 

get confirmPassword (){
  return this.form.get('confirmPassword');
} 
}
