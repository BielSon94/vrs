import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@features/auth/service/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm!: FormGroup;
  message: string = "";
  hide = true;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {



  }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    });

  }

  onSubmit() {
    if(this.loginForm.invalid) {
      return console.error();
    }
    this.authService.login(this.loginForm.value).pipe(
      map(token => this.router.navigate(['/']))
    ).subscribe({
      error: (error) => {
        if (error instanceof HttpErrorResponse) {
          this.message = error.error.message;
        }
      }
    });
  }

}
