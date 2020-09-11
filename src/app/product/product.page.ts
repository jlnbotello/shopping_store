import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';
import { NumberSymbol } from '@angular/common';


@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
  
export class ProductPage implements OnInit {

  private qty_input = 1;
  private product = new Product;  
  
  constructor(private activeRoute: ActivatedRoute, private prodSrv: ProductService, private cartSrv: CartService, private httpClient: HttpClient) { }
  
  ngOnInit() {
    this.activeRoute.paramMap.subscribe(paramMap => {
      this.prodSrv.getById(paramMap.get("id")).subscribe((product) => {
        this.product = product;
        this.cartSrv.getProductQuantity(product).subscribe(cart_qty => {
          this.qty_input = parseInt(cart_qty, 10);
        });        
      });
    });
  }  


  on_add_button() {
    this.cartSrv.add(this.product, this.qty_input);
  }
}
