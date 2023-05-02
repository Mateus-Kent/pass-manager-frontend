import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'edit-profile',
    pathMatch: 'full',
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
