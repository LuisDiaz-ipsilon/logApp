import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedAppRoutingModule } from './protected-app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ProtectedAppContainerComponent } from './protected-app-container/protected-app-container.component';


@NgModule({
  declarations: [DashboardComponent, HeaderComponent, ProtectedAppContainerComponent],
  imports: [
    CommonModule,
    ProtectedAppRoutingModule
  ]
})
export class ProtectedAppModule { }
