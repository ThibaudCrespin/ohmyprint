import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { NavModule } from '../../common/nav/nav.module';

@NgModule({
  imports: [
    CommonModule,
    NavModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
