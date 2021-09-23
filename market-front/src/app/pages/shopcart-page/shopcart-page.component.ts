import { Component, OnInit } from '@angular/core';
import {ShoppingCart} from "../../model/shoppingcart.model";
import {ShoppingcartService} from "../../shoppingcart.service";

@Component({
  selector: 'app-shopcart-page',
  templateUrl: './shopcart-page.component.html',
  styleUrls: ['./shopcart-page.component.css']
})
export class ShopcartPageComponent implements OnInit {

  public shopCarts : ShoppingCart[];

  constructor(private shopCartService : ShoppingcartService) {
    this.shopCarts = [];
  }

  ngOnInit(){
    this.getShopingCarts();
    console.log(this.shopCarts);
  }

  getShopingCarts(){
    this.shopCartService.getShopingCarts()
    .subscribe(res => this.shopCarts= res
    );
  }

}
