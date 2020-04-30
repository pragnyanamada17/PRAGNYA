import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCentreComponent } from './add-Test/add-Test.component';

import { CentresComponent } from './centres/centres.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';



const routes: Routes = [
  { path:'', component: CentresComponent,canActivate:[AuthGuardService]},
  { path:'addcentre', component: AddCentreComponent,canActivate:[AuthGuardService]},
  { path: 'login', component: LoginComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
