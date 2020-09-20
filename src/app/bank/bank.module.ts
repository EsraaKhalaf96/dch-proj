import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankRoutingModule } from './bank-routing.module';
import { MainContentComponent } from './layout/components/main-content/main-content.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LeftSidebarComponent } from './layout/components/left-sidebar/left-sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccountSettingModule } from './pages/account-setting/account-setting.module';


@NgModule({
  declarations: [
    MainContentComponent,
    LeftSidebarComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    BankRoutingModule,
    AccountSettingModule,
    NgbModule
  ]
})
export class BankModule { }
