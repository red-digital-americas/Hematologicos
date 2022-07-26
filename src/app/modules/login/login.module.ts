import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { LoginComponent } from '../../pages/login/login.component';
import { RouterModule } from '@angular/router';
import { LoginRoutes } from './login-routing.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LoginRoutes)
  ],
  providers: [],
  exports: []
})
export class LoginModule { }
