import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  user: { id: number; name: string; lastName: string };

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id: number;
    // const id=+this.activatedRoute.snapshot.params['id']
    this.activatedRoute.params.subscribe((params) => {
      id=+params['id'];
      // console.log(id)
      this.user = this.userService.getUser(id);
    });

    // console.log(id, typeof id);

    
  }

  updateUser(name: HTMLInputElement, lastName: HTMLInputElement) {
    const id: number = +this.activatedRoute.snapshot.params['id'];
    const userName = name.value;
    const userLastName = lastName.value;
    const status = this.userService.updateUser(id, userName, userLastName);

    if (status) {
      this.router.navigate(['/users']);
    }
  }
}
