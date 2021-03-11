import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './component/user-profile/user-profile.component';


@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    SharedModule
  ]
})
export class UserProfileModule { }
