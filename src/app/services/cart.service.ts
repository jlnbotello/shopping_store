import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private counter = 0;
  private max_count = 100;

  constructor() { }

  clear() {
    this.counter = 0;
  }

  add() {
    if (this.counter < this.max_count) {
      this.counter++
    }
  }

  substract() {
    if (this.counter > 0) {
      this.counter--;
    }
  }

  setMaxCount(max_count:number) {
    this.max_count = max_count;
  }

  getCount() {
    return this.counter;
  }
}
