import { Injectable } from '@angular/core';
import { CartProduct } from '../model/cart-product';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { debugOutputAstAsTypeScript } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

export class CartService {
   
  private path = "http://localhost:3001";
  //Observable counter
  private quantity_sbj = new BehaviorSubject<number>(0);
  public readonly quantity:Observable<number> = this.quantity_sbj.asObservable();
  // Observable list
  private list_sbj : BehaviorSubject<Product[]> = new BehaviorSubject([]);
  public readonly list: Observable<Product[]> = this.list_sbj.asObservable();
  
  constructor(private httpClient: HttpClient) { }
  
  add(product: Product, quantity: number) {
    if (quantity > 0) {     
      //spread properties
      let cartProduct = { ...product };
      cartProduct.quantity = quantity;
      this.httpClient.post(this.path + "/cart", cartProduct).subscribe(() => {
        this.updateList();
        this.updateQuantity();
      })
    }
  }

  clear(product: Product) {
    this.httpClient.delete(this.path + "/cart/" + product.id).subscribe(() => {
     
   })
  }

  updateList() {
    this.httpClient.get<Product[]>(this.path + "/cart").subscribe((list: Product[]) => {
      this.list_sbj.next(list); // FIXME: inefficient!!!!
    });
  }

  updateQuantity() {
    this.httpClient.get<string>(this.path + "/cart/quantity").subscribe((qty: string) => {
      this.quantity_sbj.next(parseInt(qty, 10));
    });
  }

  getProductQuantity(product: Product) {
    return this.httpClient.get<string>(this.path + "/cart/" + product.id + "/quantity");
  }

  buyCurrentCart() {
    return this.httpClient.post(this.path + "/cart/buy", {}); //FIXME: zero?
  }

  public clearCart() {
    this.list_sbj.next([]);
    this.quantity_sbj.next(0);
    this.httpClient.delete(this.path + "/cart").subscribe((res) => {
      console.log(res);
    });
  }
}
