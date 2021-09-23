import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../model/product.model";

@Component({
  selector: 'tr[app-product-list-item]',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {

  @Input()
  product : Product;

  @Output()
  markForCartShop : EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setProductForCart(){
    this.markForCartShop.next(this.product);
  }


}
