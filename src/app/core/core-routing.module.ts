import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationListComponent } from '@features/reservation/component/reservation-list/reservation-list.component';
import { UserProfileComponent } from '@features/user-profile/component/user-profile/user-profile.component';
import { UsersListComponent } from '@features/users/component/users-list/users-list.component';
import { PageNotFoundComponent } from '@shared/component/page-not-found/page-not-found.component';
import { AuthGuard } from './guard/auth.guard';
import { AdminLayoutComponent } from './layout/admin/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layout/client/client-layout/client-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'reservations', component: ReservationListComponent },
      { path: 'users', component: UsersListComponent }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'profile/:id',
    component: UserProfileComponent
  },
  {
    path: 'reservation',
    loadChildren: () => import('@features/reservation/reservations.module').then(m => m.ReservationModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('@features/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '404-page-not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404-page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
