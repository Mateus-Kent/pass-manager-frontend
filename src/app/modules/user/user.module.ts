import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';


@NgModule({
  declarations: [
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
