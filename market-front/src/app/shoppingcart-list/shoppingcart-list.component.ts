import {Component, Input, OnInit} from '@angular/core';
import {ShoppingCart} from "../model/shoppingcart.model";

@Component({
  selector: 'app-shoppingcart-list',
  templateUrl: './shoppingcart-list.component.html',
  styleUrls: ['./shoppingcart-list.component.css']
})
export class ShoppingcartListComponent implements OnInit {

  @Input()
  public shopCarts : ShoppingCart[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
