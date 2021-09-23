import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../model/category.model';
import { Product, ProductInterFace } from '../model/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {
 
  public categories : Category[];
  public products : ProductInterFace[];

  public productForCart : Product;

  constructor(
    private productService: ProductService,
    private categoryService : CategoryService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(
      categories => this.categories = categories
    )
  }
  loadData(){
    this.productService.getNewestProducts().subscribe(
      products => this.products = products
    )
      this.getCategories();
    }
}
