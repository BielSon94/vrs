import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './component/users-list/users-list.component';
import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
