import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MainContentComponent } from './layout/components/main-content/main-content.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LeftSidebarComponent } from './layout/components/left-sidebar/left-sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccountSettingModule } from './pages/account-setting/account-setting.module';
import { SetupModule } from './pages/setup/setup.module';
import { SetupRoutingModule } from './pages/setup/setup-routing.module';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    MainContentComponent,
    LeftSidebarComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SetupRoutingModule,
    AccountSettingModule,
    SetupModule,
    NgbModule,
    TableModule
  ]
})
export class AdminModule { }
