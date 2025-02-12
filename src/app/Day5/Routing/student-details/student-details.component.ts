import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  imports: [CommonModule],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {
  id: number = 0;
  Id = 'id';
  constructor(ActiveRouted: ActivatedRoute){
    this.id = ActiveRouted.snapshot.params['id'];
  }
}
