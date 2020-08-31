import { Injectable } from '@angular/core';
import { CartProduct } from '../model/cart-product';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cartList: Array<CartProduct> = [];

  constructor() { }

  add(product: Product, quantity: number) {

    const index = this.findIndex(product);
    if (index == (-1)) { //not found
      let cart_prod = new CartProduct(product, 1);
      this.cartList.push(cart_prod);
    } else { //update quantity
      this.cartList[index].incQty(quantity);
    }
  }
  set(product: Product, quantity: number) {
    const index = this.findIndex(product);
    if (index >= 0)
      this.cartList[index].setQty(quantity);
  }

  clear(product: Product) {
    const index = this.findIndex(product);
    if (index >= 0)
      this.cartList[index].setQty(0);
  }

  private findIndex(product: Product): number {
    return this.cartList.findIndex(i => i.product.id === product.id);
  }

  getList() {
    return this.cartList;
  }

  getQuantity() {
    const accu_init = 0;
    return this.cartList.reduce((accu, prod) => accu += prod.getQty() ,accu_init)
  }

}
