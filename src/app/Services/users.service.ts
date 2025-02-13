import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly URL = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http : HttpClient) { }

  getAllUsers(){
    return this.http.get(this.URL);
  }
  getUserByID(id: number){
    return this.http.get(this.URL + '/' + id);
  }
}
