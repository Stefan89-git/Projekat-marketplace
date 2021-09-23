import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Category } from '../model/category.model';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  styleUrls: ['./add-product-page.component.css']
})
export class AddProductPageComponent implements OnInit {
  public productToAdd:Product;

  @Output()
  ProductAdded: EventEmitter<Product>=new EventEmitter();

  @Input()
  public categories:Category[];

  constructor() {
    
   }

  ngOnInit(): void {
  }
  save(){
    this.ProductAdded.next(this.productToAdd);
  }

}
