import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@features/auth/service/auth.service';
import { UsersService } from '@features/users/service/users.service';
import { map } from 'rxjs/operators';
import { User } from 'src/app/api/model/user.model';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.scss']
})
export class ClientLayoutComponent implements OnInit {

  isAuthenticated: boolean = false;

  user: User = {
    firstName: "",
    lastName: ""
  }


  constructor(
    private authService: AuthService,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.isLogged();
    console.log(this.authService.accountValue);
    console.log(this.getProfile());
  }

  isLogged(): boolean {
    if(this.authService.isAuthenticated() == true) {
      return this.isAuthenticated = true;
    } else
      return this.isAuthenticated = false;
  }

  logout() {
    this.authService.logout();
  }

  getProfile() {
    this.userService.getUser(20).pipe(
      map((user: User) => this.user = user)).subscribe()
  }

}
