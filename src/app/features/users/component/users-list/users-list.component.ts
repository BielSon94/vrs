import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '@features/users/service/users.service';
import { map } from 'rxjs/operators';
import { User } from 'src/app/api/model/user.model';

const USER_DATA: User[] = [
  {
    id: 1,
    email: "ee@ee.pl"
  },
  {
    id: 2,
    email: "ee@eeee.pl"
  }
];


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})


export class UsersListComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = ['id', 'email', 'firstName', 'lastName', 'birthDate', 'menu'];

  constructor(
    private usersService: UsersService
  ) {
    this.initDataSource();
  }

  ngOnInit(): void {

  }

  /*initDataSource(): any {
    this.usersService.findAll().pipe(
      tap(user => console.log(user)),
      map((user: User) => this.dataSource.data = user)
    ).subscribe();
    return user;
  }*/

  initDataSource() {
    this.usersService.getUsers().pipe(
      map((user: User) => this.dataSource = user)
    ).subscribe();
  }

  reservationViewDetails() {

  }

}