import { Component } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  category = [
    {id : 1, name : 'Development'},
    {id : 2, name : 'Art'},
    {id : 3, name : 'Languages'}
  ];

  submit = (formValue : any) => console.log(formValue);

  change =(listValue : any) => console.log(listValue);
}
