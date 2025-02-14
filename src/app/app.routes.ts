import { Routes } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { ErrorComponent } from './Components/error/error.component';
import { UserComponent } from './Components/user/user.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { AddUserComponent } from './Components/add-user/add-user.component';

export const routes: Routes = [
    {path:'', redirectTo: 'users', pathMatch: 'full'},
    {path: 'users', component: UserComponent },
    {path: 'header', component: HeaderComponent },
    {path: 'users/:id', component: UserDetailsComponent },
    {path: 'addUser', component:  AddUserComponent},
    {path: '**', component: ErrorComponent },
];
