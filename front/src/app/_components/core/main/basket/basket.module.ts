import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BasketComponent } from './basket.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [BasketComponent]
})
export class BasketModule { }
