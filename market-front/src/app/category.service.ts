import { Injectable } from '@angular/core';
import {Category, CategoryInterface} from "./model/category.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  private readonly path ="http://localhost:8080/api/categories/"

  constructor(private http : HttpClient) { }


  getCategories(): Observable<Category[]>{
    return  this.http.get<Category[]>(this.path)
  }


}
