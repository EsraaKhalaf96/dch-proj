import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './layout/components/main-content/main-content.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccountSettingComponent } from './pages/account-setting/account-setting.component';

const routes: Routes = [
  {
      path: '',
      component: MainContentComponent,
      children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path:'dashboard', component:DashboardComponent},
          { path: 'account-settings', loadChildren: () => import('./pages/account-setting/account-setting.module').then(m => m.AccountSettingModule) }
          
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankRoutingModule { }
