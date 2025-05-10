import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-edit-student',
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EditStudentComponent {
  editStudentData : FormGroup = new FormGroup({
    firstName : new FormControl('') ,
    lastName : new FormControl('') ,
    mobile : new FormControl('') ,
  })

  formValue : any;

  editStudent(){
    this.formValue = this.editStudentData.value;
  }

}




