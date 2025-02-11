import { Routes } from '@angular/router';
import { StudentDetailsComponent } from './Day5/Routing/student-details/student-details.component';
import { StudentsComponent } from './Day5/Routing/students/students.component';
import { ProfileComponent } from './Day5/Routing/profile/profile.component';
import { ErrorComponent } from './Day5/Routing/error/error.component';

export const routes: Routes = [
    {path: '', component: StudentsComponent},
    {path: 'students', component: StudentsComponent},
    {path: 'students/:id', component: StudentDetailsComponent},
    {path: 'profile', component: ProfileComponent},
    {path: '**', component: ErrorComponent},
];
