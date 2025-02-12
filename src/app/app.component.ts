import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { StudentsComponent } from './Day5/Routing/students/students.component';
import { HeaderComponent } from "./Day5/Routing/header/header.component";
import { CustomDirective } from './Directives/custom.directive';
import { CommonModule } from '@angular/common';
import { CustomPipe } from './Pipes/custom.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet, StudentsComponent, HeaderComponent, CustomDirective, CommonModule, CustomPipe],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  name = "yousef";

}
