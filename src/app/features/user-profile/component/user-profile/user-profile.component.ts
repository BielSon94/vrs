import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '@features/users/service/users.service';
import { Subscription } from 'rxjs';
import { map, min } from 'rxjs/operators';
import { User } from 'src/app/api/model/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userId: number | null = null;
  private sub!: Subscription;
  user: User = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UsersService
  ) {
  }

  ngOnInit(): void {

    this.sub = this.activatedRoute.params.subscribe(params => {
      this.userId = params['id'];
      console.log(this.userId);
      this.userService.getUser(this.userId!).pipe(
        map((user: User) => this.user = user)
      ).subscribe()

    })
  }

}
