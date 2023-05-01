import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CredentialRoutingModule } from './credential-routing.module';
import { ListComponent } from './pages/list/list.component';
import { RegisterPasswordComponent } from './pages/register-password/register-password.component';


@NgModule({
  declarations: [
    ListComponent,
    RegisterPasswordComponent
  ],
  imports: [
    CommonModule,
    CredentialRoutingModule
  ]
})
export class CredentialModule { }
