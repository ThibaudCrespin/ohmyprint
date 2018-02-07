import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './_components/core/home/home.component';
import { MainComponent } from './_components/core/main/main.component';
import { ProductsComponent } from './_components/core/main/products/products.component';
import { ProductComponent } from './_components/core/main/product/product.component';
import { BasketComponent } from './_components/core/main/basket/basket.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {path: '', redirectTo: 'products', pathMatch: 'full'},
      {path: 'products', component: ProductsComponent},
      {path: 'product/:id', component: ProductComponent},
      {path: 'basket', component: BasketComponent},
      {path: '**', redirectTo: 'products', pathMatch: 'full'}
    ]
  },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
