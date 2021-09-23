import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product, ProductInterFace} from "../model/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input()
  public products : ProductInterFace[];

  @Output()
  markForCartShop : EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  setProductForCart(product : Product){
    this.markForCartShop.next(product);
  }

}
