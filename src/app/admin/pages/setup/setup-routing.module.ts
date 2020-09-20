import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetupComponent } from './setup.component';
import { UsersComponent } from './users/users.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { BanksComponent } from './banks/banks.component';
import { PasswordManagerComponent } from './password-manager/password-manager.component';
import { ProfileDetailsComponent } from './profiles/profile-details/profile-details.component';
import { GeneralComponent } from './profiles/profile-details/general/general.component';
import { ProfUsersComponent } from './profiles/profile-details/prof-users/prof-users.component';
import { ProfPrivilageComponent } from './profiles/profile-details/prof-privilage/prof-privilage.component';


const routes: Routes = [
  {
      path: '',
      component: SetupComponent,
      children: [
          { path: '', redirectTo: 'users', pathMatch: 'full' },
          { path:'users', component:UsersComponent},
          { path:'profiles', component:ProfilesComponent},
          { path:'profiles-details', component:ProfileDetailsComponent, children:[
            { path: '', redirectTo: 'general', pathMatch: 'full' },
            { path:'general', component:GeneralComponent},
            { path:'users', component:ProfUsersComponent},
            { path:'privilages', component:ProfPrivilageComponent},
          ]},
          { path:'banks', component:BanksComponent},
          { path:'password-manager', component:PasswordManagerComponent},
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule { }
