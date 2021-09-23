import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from "./model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly path ="http://localhost:8080/api/products/"

  constructor(private http : HttpClient) { }


  getProducts(): Observable<Product[]>{
    return  this.http.get<Product[]>(this.path)
  }
  getNewestProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.path}${"newest"}`);
  }

  searchProducts(categoryName : string) : Observable<Product[]>{
    const params : HttpParams= new HttpParams().append('categoryName', categoryName);
    return  this.http.get<Product[]>(this.path, {params})
  }

  getProduct(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.path}${id}`);
  }

  postProduct(product : Product) : Observable<Product>{
    return this.http.post<Product>(this.path, product );
  }

  deleteProduct(id: number) : Observable<Product>{
    return this.http.delete<Product>(`${this.path}${id}`);
  }

  putProduct(product: Product) : Observable<Product>{
    return this.http.put<Product>(`${this.path}${product.id}`, product);
  }

}
