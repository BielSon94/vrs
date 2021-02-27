import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationRoutingModule } from './reservation-routing.module';
import { SharedModule } from '@shared/shared.module';
import { LayoutComponent } from './component/layout/layout.component';
import { ReservationListComponent } from './component/reservation-list/reservation-list.component';
import { ReservationEditComponent } from './component/reservation-edit/reservation-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LayoutComponent, ReservationListComponent, ReservationEditComponent],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})


export class ReservationModule { }
