import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ClientLayoutComponent } from './layout/client/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layout/admin/admin-layout/admin-layout.component';


@NgModule({
  declarations: [ClientLayoutComponent, AdminLayoutComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ]
})
export class CoreModule { }
