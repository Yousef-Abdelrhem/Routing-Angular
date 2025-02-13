import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../Services/users.service';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user',
  imports: [RouterModule, HttpClientModule],
  providers:[UsersService],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  constructor(private usersService : UsersService){
  }

  ngOnInit(): void{
      this.usersService.getAllUsers().subscribe(
        {
          next: (data) => {console.log(data)},
          error: (error) => {console.log(error)},
          complete: () => {console.log("The completed")}
        }
      );
  }

}
