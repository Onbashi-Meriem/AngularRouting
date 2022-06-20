import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:{id:number, name:string,lastName:string}[]= []
    

  constructor(private userService: UserService) {
    this.users=this.userService.users
   }

  ngOnInit(): void {
  }

}
