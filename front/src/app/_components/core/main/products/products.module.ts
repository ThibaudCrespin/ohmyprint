import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductCardModule } from '../../../common/product-card/product-card.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ProductCardModule
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }
