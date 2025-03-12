import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [

    {path:'create',component:UserComponent},
    {path:'edit',component:EditComponent},
    {path:'list',component:ListComponent}

];
