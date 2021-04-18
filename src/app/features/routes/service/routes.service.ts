import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  routesUrl = `${environment.apiUrl}/routes`;

  constructor(
    private http: HttpClient
  ) { }

  getRoutes() {
    return this.http.get<any>(`${this.routesUrl}`).pipe(
      tap(console.log),
      map(routes => routes)
    )
  }

}
