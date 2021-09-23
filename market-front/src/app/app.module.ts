import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPagesComponent } from './pages/product-pages/product-pages.component';

import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { SearchComponent } from './search/search.component';
import { ShopcartPageComponent } from './pages/shopcart-page/shopcart-page.component';
import { ShopcartFormComponent } from './pages/shopcart-form/shopcart-form.component';
import { ShopppingcartListItemComponent } from './shopppingcart-list-item/shopppingcart-list-item.component';
import { ShoppingcartListComponent } from './shoppingcart-list/shoppingcart-list.component';
import { TestPageComponent } from './test-page/test-page.component';
import { AddProductPageComponent } from './add-product-page/add-product-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListItemComponent,
    ProductListComponent,
    ProductPagesComponent,
    SearchComponent,
    ShopcartPageComponent,
    ShopcartFormComponent,
    ShopppingcartListItemComponent,
    ShoppingcartListComponent,
    TestPageComponent,
    AddProductPageComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
