import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UsersService } from '../../Services/users.service';

@Component({
  selector: 'app-add-user',
  imports: [RouterModule],
  providers: [UsersService],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  constructor(private UsersService: UsersService, private router: Router){

  }
  Add(name: string, email: string, phone: string){
      let user = {name , email, phone};
      this.UsersService.addUser(user).subscribe();
      this.router.navigate(['/users']); 
    }
}
