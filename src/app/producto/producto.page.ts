import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
  
export class ProductoPage implements OnInit {

  private producto;
  private curr_count = 0;
  
  constructor(private activeRoute: ActivatedRoute, private prodSrv: ProductoService, private cartSrv: CartService) { }
  
  ngOnInit() {
    this.activeRoute.paramMap.subscribe(paramMap => {
      this.producto = this.prodSrv.obtenerPorId(paramMap.get("id"));
      //alert(paramMap.get("id"));
    });
  }
  
  agregarProducto() {
    this.prodSrv.agregar(this.producto);
  }

  on_add_button() {
    this.cartSrv.add();
    this.curr_count = this.cartSrv.getCount();
   }
}
