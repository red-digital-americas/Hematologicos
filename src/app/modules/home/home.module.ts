import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { HomeComponent } from '../../pages/home/home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes)
  ],
  providers: [],
  exports: []
})
export class HomeModule { }
