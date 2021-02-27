import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@features/auth/service/auth.service';
import { User } from 'src/app/api/model/user.model';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.scss']
})
export class ClientLayoutComponent implements OnInit {

  isAuthenticated: boolean = false;

  user: User = {
    firstName: "Łukasz",
    lastName: "Bielecki",
  }


  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  logout() {

  }

}
