import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupRoutingModule } from './setup-routing.module';
import { SetupComponent } from './setup.component';
import { UsersComponent } from './users/users.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { BanksComponent } from './banks/banks.component';
import { PasswordManagerComponent } from './password-manager/password-manager.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TooltipModule } from 'primeng/tooltip';
import { ProfileDetailsComponent } from './profiles/profile-details/profile-details.component';
import { GeneralComponent } from './profiles/profile-details/general/general.component';
import { ProfUsersComponent } from './profiles/profile-details/prof-users/prof-users.component';
import { ProfPrivilageComponent } from './profiles/profile-details/prof-privilage/prof-privilage.component';

@NgModule({
  declarations: [
    SetupComponent,
    UsersComponent,
    ProfilesComponent,
    BanksComponent,
    PasswordManagerComponent,
    ProfileDetailsComponent,
    GeneralComponent,
    ProfUsersComponent,
    ProfPrivilageComponent
  ],
  imports: [
    CommonModule,
    SetupRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AccordionModule,
    SelectButtonModule,
    TableModule,
    TooltipModule
  ]
})
export class SetupModule { }
