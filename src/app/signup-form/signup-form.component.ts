import { Component } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { UseNameValidator } from './username.validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username : new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UseNameValidator.cannotContainSpace
    ],
    UseNameValidator.uniqueName),
    password : new FormControl('',Validators.required)
  });

  login(){
    this.form.setErrors({
      formsError : true
    });
  }

  get username(){
    return this.form.get('username');
  }
}
