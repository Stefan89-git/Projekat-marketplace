import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../model/product.model";

@Component({
  selector: 'app-shopcart-form',
  templateUrl: './shopcart-form.component.html',
  styleUrls: ['./shopcart-form.component.css']
})
export class ShopcartFormComponent implements OnInit {

  @Input()
 public productForShopingCart: Product;

  public quantity : number;

  constructor() { }

  ngOnInit() {
  }

}
