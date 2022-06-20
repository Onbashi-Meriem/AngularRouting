import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  user:{id:number, name:string,lastName:string}

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
 
    const id=+this.activatedRoute.snapshot.params['id']
    console.log(id, typeof(id))

    this.user = this.userService.getUser(id)
  }

}
