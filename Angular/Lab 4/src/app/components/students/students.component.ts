import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  Students=[
    {name:"Viola George",age:"23"},
    {name:"Martina George",age:"22"},
    {name:"Merna Mansour",age:"26"},
    {name:"Noura",age:"17"}
  ];
}