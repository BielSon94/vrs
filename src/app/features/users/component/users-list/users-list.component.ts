import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from '@features/users/service/users.service';
import { User } from 'src/app/api/model/user.model';

const USER_DATA: User[] = [
  {
    id: 1
  },
  {
    id: 2
  }
];


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})


export class UsersListComponent implements OnInit {

  data: any
  displayedColumns: string[] = ['id'];

  constructor(
    private usersService: UsersService
  ) {



  }

  ngOnInit(): void {
    this.data = new MatTableDataSource<User>(USER_DATA);
  }

  /*initDataSource(): any {
    this.usersService.findAll().pipe(
      tap(user => console.log(user)),
      map((user: User) => this.dataSource.data = user)
    ).subscribe();
    return user;
  }*/

}
