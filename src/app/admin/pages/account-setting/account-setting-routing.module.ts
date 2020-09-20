import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountSettingComponent } from './account-setting.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


const routes: Routes = [
  {
      path: '',
      component: AccountSettingComponent,
      children: [
          { path: '', redirectTo: 'profile', pathMatch: 'full' },
          { path:'profile', component:ProfileComponent},
          { path:'change-password', component:ChangePasswordComponent},
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountSettingRoutingModule { }
