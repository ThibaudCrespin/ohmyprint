import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';

import { HeaderModule } from '../../common/header/header.module';
import { FooterModule } from '../../common/footer/footer.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }
