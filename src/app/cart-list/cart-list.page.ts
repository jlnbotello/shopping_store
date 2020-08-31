import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../model/cart-product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.page.html',
  styleUrls: ['./cart-list.page.scss'],
})
export class CartListPage implements OnInit {
  
  private cartList: Array<CartProduct>;
  private cart_count=10;
  
  
  constructor(private cartSrv: CartService) {
    
  }

  ngOnInit(){}

  ngAfterViewChecked(){ //FIXME
    this.cartList = this.cartSrv.getList();
    this.cart_count = this.cartSrv.getQuantity();
  }  
}