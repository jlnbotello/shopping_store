import { Product } from './product';
import { NumericValueAccessor } from '@ionic/angular';

export class CartProduct {
  private quantity: number;
  public product: Product;
  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }

  setQty(qty: number) {
    if (qty >= 0)
      this.quantity = qty;
  }

  incQty(inc: number) {
    if (inc > 0)
      this.quantity += inc;
  }

  getQty() {
    return this.quantity;
  }
}