import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';



import { ProductPage } from './product.page';
import { CartModule } from '../components/cart/cart.module';
import { ProductPageRoutingModule } from './product-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPageRoutingModule,
    CartModule
  ],
  declarations: [ProductPage]
})
export class ProductPageModule {}
