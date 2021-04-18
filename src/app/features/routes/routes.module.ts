import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './component/layout/layout.component';
import { SharedModule } from '@shared/shared.module';
import { RoutesRoutingModule } from './routes-routing.module';
import { RoutesListComponent } from './component/routes-list/routes-list.component';
import { AddRouteComponent } from './component/add-route/add-route.component';



@NgModule({
  declarations: [LayoutComponent, RoutesListComponent, AddRouteComponent],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    SharedModule
  ]
})
export class RoutesModule { }
