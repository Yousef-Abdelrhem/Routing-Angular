import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../Services/users.service';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [RouterModule, HttpClientModule, CommonModule],
  providers:[UsersService],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  Users: any ;
  constructor(private usersService : UsersService){
  }

  ngOnInit(): void{
      this.usersService.getAllUsers().subscribe(
        {
          next: (data) => {this.Users = data},
          error: (error) => {console.log(error)},
        }
      );
  }
}
