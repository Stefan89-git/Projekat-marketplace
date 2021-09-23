import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import {ProductPagesComponent} from "./pages/product-pages/product-pages.component";
import {ShopcartPageComponent} from "./pages/shopcart-page/shopcart-page.component";
import { TestPageComponent } from './test-page/test-page.component';

const routes: Routes = [
  { path: 'products', component: ProductPagesComponent},
  { path: 'shopingCart', component: ShopcartPageComponent},
  {path:'test-page',component:TestPageComponent},
  {  path: '', redirectTo: 'products', pathMatch: 'full'},
  {path:'**',component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
