import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginForm } from '../model/login.model';
import { map, tap } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { RegisterForm } from '../model/register.model';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/api/model/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';

export const JWT_NAME = 'VRS_AUTH_TOKEN';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private accountSubject = new BehaviorSubject<User>(null!)
  public account: Observable<User>

  authUrl = `${environment.apiUrl}/auth`;

  constructor(
    private http: HttpClient,
    private router: Router,
    private jwtHelper: JwtHelperService
  ) {
    this.accountSubject = new BehaviorSubject<User>(null!);
    this.account = this.accountSubject.asObservable();
  }

  public get accountValue(): User {
    return this.accountSubject.value;
  }

  login(loginForm: LoginForm) {
    return this.http.post<any>(`${this.authUrl}/login`, { email: loginForm.email, password: loginForm.password }, { withCredentials: true }).pipe(
      map((token) => {
        console.log(token);
        localStorage.setItem(JWT_NAME, token.accessToken);
        return token;
      })
    )
  }

  register(registerForm: RegisterForm) {
    return this.http.post<any>(`${this.authUrl}/register`, registerForm).pipe(
      map(user => user)
    )
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(JWT_NAME);
    return !this.jwtHelper.isTokenExpired(token!);
  }

  // Funkcja która wylogowuje użytkownika usuwając z pamięci lokalnej TOKEN pobrany z BACKENDU.
  logout() {
    localStorage.removeItem(JWT_NAME);
    this.accountSubject.next(null!);
    this.router.navigate(['auth/login']);
  }
}
