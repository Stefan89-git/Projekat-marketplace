import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ShoppingCart} from "./model/shoppingcart.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {

  private readonly path="http://localhost:8080/api/shopingcart/";

  constructor(private http : HttpClient) { }



  getShopingCarts(): Observable<ShoppingCart[]>{
    return  this.http.get<ShoppingCart[]>(this.path);
  }



}
