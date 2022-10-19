import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products-page/Products/products.component';
import { HomeComponent } from './landing-page/home/home.component';
import { ProductComponent } from './ProductPage/product/product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'products/:category/:id',
    component: ProductComponent,
  },
  {
    path: 'products/:category',
    component: ProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
