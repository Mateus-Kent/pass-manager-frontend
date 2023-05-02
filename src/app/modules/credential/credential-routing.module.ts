import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { RegisterPasswordComponent } from './pages/register-password/register-password.component';
import { EditCredentialComponent } from './pages/edit-credential/edit-credential.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'register',
    component: RegisterPasswordComponent,
  },
  {
    path: 'edit/1',
    component: EditCredentialComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CredentialRoutingModule {}
