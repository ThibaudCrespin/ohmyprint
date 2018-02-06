import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';

import { NavModule } from '../nav/nav.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NavModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
