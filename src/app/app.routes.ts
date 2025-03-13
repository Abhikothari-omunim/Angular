import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

export const routes: Routes = [

    {path:'addstudent',component:AddStudentComponent},
    {path:'editstudent',component:EditStudentComponent},
    {path:'list',component:ListComponent}

];
