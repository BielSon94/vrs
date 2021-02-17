import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@shared/component/page-not-found/page-not-found.component';
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
    pathMatch: 'full'
  },
  {
    path: 'reservation',
    loadChildren: () => import('@features/reservation/reservations.module').then(m => m.ReservationModule),
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
