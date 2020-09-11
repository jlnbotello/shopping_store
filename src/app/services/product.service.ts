import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private path = "http://localhost:3001";
  private list_sbj : BehaviorSubject<Product[]> = new BehaviorSubject([]);
  public readonly list : Observable<Product[]> = this.list_sbj.asObservable();

  constructor(private httpClient: HttpClient) { }

  public getAll() {
    return this.httpClient.get<Product[]>(this.path + "/products");
  }

  public getById(id: string) {
    return this.httpClient.get<Product>(this.path + "/products/" + id);
  }

  public add(prod: Product) {
    return this.httpClient.post(this.path + "/products", prod);
  }

  public updateList() {
    this.httpClient.get<Product[]>(this.path + "/products").subscribe(list => {
      this.list_sbj.next(list);
    });
  }

}
