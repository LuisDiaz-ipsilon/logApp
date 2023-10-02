import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedAppRoutingModule } from './protected-app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [DashboardComponent, HeaderComponent],
  imports: [
    CommonModule,
    ProtectedAppRoutingModule
  ]
})
export class ProtectedAppModule { }
