import { Routes } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { ErrorComponent } from './Components/error/error.component';
import { UserComponent } from './Components/user/user.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';

export const routes: Routes = [
    {path: '', component: UserComponent },
    {path: 'header', component: HeaderComponent },
    {path: 'users/:id', component: UserDetailsComponent },
    {path: '**', component: ErrorComponent },
];
