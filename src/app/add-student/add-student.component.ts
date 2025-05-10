import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-student',
  imports: [ReactiveFormsModule , JsonPipe],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  addStudentData : FormGroup = new FormGroup({
    firstName : new FormControl('') ,
    lastName : new FormControl('') ,
    mobile : new FormControl('') ,
  })

  formValue : any;

  addStudent(){
    this.formValue = this.addStudentData.value;
  }

}
