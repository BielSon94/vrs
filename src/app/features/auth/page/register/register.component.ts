import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  vrs = {
    brandName: "Vehicle Reservation System",
    shortcutName: "VRS",
    login: "Zaloguj",
    register: "Zarejestruj"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
