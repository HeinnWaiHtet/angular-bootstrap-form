import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactMethods = [
    {id : 1,name :'heinwaihtet'},
    {id : 2, name : 'ayechanmay'}
  ];
  
  log = (value : any) => console.log(value);

  submit = (value : any) => console.log(value);
}
