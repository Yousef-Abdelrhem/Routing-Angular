import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {
  ID: number = 0;
  constructor(ActiveRouted: ActivatedRoute){
    // console.log();
    this.ID = ActiveRouted.snapshot.params['id'];
  }
}
