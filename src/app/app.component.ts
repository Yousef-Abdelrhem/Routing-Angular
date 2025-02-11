import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { StudentsComponent } from './Day5/Routing/students/students.component';
import { HeaderComponent } from "./Day5/Routing/header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet, StudentsComponent, HeaderComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
}
