import { Component } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  student = {
    name: "Viola George",
    age: "23",
    phone: "01210506723",
    email: "violageorgekamal@gmail.com",
    address: "smouha, Alexandria, Egypt"
  }
}