import { Component, OnInit } from '@angular/core';
import { AuthService } from '@features/auth/service/auth.service';
import { User } from 'src/app/api/model/user.model';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})

export class AdminLayoutComponent implements OnInit {

  isAuthenticated: boolean = true;

  user: User = {
    firstName: "Łukasz"
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

  logout() {

  }

}
