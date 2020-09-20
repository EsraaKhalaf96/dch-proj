import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountSettingRoutingModule } from './account-setting-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountSettingComponent } from './account-setting.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AccountSettingComponent,
    ProfileComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    AccountSettingRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class AccountSettingModule { }
