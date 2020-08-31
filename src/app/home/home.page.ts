import { Component, OnInit, OnChanges } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Product } from '../model/product';
import { CartComponent } from '../components/cart/cart.component';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private productos:Product[];
  private cantidad = 0;
  private cart_count = 0;
  constructor(private prodSrv: ProductoService,private cartSrv:CartService) {
    // let prod = new Producto();
    // prod.id = "5";
    // prod.name = "TV Led"
    // prod.price = 990;
    // this.prodSrv.agregar(prod);

    this.productos = prodSrv.obtenerTodos();
  }
  
  ngAfterViewChecked(){ //FIXME
    this.cart_count = this.cartSrv.getQuantity();
  }

}
