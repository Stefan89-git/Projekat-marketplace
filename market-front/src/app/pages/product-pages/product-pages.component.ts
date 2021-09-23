import { Component, OnInit } from '@angular/core';
import {ProductInterFace, Product} from "../../model/product.model";
import {ProductService} from "../../product.service";
import {CategoryService} from "../../category.service";
import {Category} from "../../model/category.model";
import { ShoppingCart } from 'src/app/model/shoppingcart.model';
import { ShoppingcartService } from 'src/app/shoppingcart.service';

@Component({
  selector: 'app-product-pages',
  templateUrl: './product-pages.component.html',
  styleUrls: ['./product-pages.component.css']
})
export class ProductPagesComponent implements OnInit {

  public categories : Category[];
  public products : ProductInterFace[];

  public productForCart : Product;

  constructor(
    private productService: ProductService,
    private categoryService : CategoryService
  ) { }

  ngOnInit() {
    this.loadData();
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(
      categories => this.categories = categories
    )
  }

  search(name: string){
    this.productService.searchProducts(name).subscribe((products : Product[]) =>
   this.products = products)
  }


loadData(){
this.productService.getProducts().subscribe(
  products => this.products = products
)
  this.getCategories();
}

  setProductForShopcart(product : Product){
  this.productForCart=product;
  }
  reset(){
    this.loadData();
  }
  saveProduct(newProduct:Product){
    this.productService.postProduct(newProduct)
    .subscribe(_=>this.loadData());
  }

}
