import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../Services/users.service';

@Component({
  selector: 'app-user-details',
  imports: [],
  providers: [UsersService],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  ID = 0;
  user: any = {};
  constructor(private ActivatedRoute : ActivatedRoute,private usersService : UsersService){
    this.ID = ActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(){
    this.usersService.getUserByID(this.ID).subscribe
    ({
      next: (data) => {this.user = data; console.log(this.user.id);},
      error: (error) => {console.log(error)}
    }
    );
  }
  
}
