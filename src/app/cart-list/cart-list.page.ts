import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
//import { ConsoleReporter } from 'jasmine';
import { Product } from '../model/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.page.html',
  styleUrls: ['./cart-list.page.scss'],
})
export class CartListPage implements OnInit {
  
  constructor(private cartSrv: CartService, private prodSrv:ProductService, private loadCtrlr: LoadingController) {
  }

  ngOnInit() {

  }

  on_buy_button() {
    console.log("Buying transaction initiated");
    this.cartSrv.buyCurrentCart().subscribe((response) => {
      console.log(response);
      this.prodSrv.updateList();
      alert("Compra exitosa. Ya sabemos donde vive ;) \n Se vaciará el carrito");
      this.cartSrv.clearCart();
    })
  }
}