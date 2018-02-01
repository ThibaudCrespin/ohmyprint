import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/**
 * CORE MODULE IMPORTS
 * */
import { HomeModule } from './_components/core/home/home.module';
import { MainModule } from './_components/core/main/main.module';
import { ProductsModule } from './_components/core/main/products/products.module';
import { ProductModule } from './_components/core/main/product/product.module';

/**
 * COMMON MODULE IMPORTS
 * */
import { HeaderModule } from './_components/common/header/header.module';
import { NavModule } from './_components/common/nav/nav.module';
import { ProductCardModule } from './_components/common/product-card/product-card.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    MainModule,
    ProductsModule,
    ProductModule,
    HeaderModule,
    NavModule,
    ProductCardModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
