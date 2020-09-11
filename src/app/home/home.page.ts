import { Component, OnInit, OnChanges } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { CartComponent } from '../components/cart/cart.component';
import { CartService } from '../services/cart.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  constructor(private prodSrv: ProductService, private cartSrv: CartService, private alertCtrlr: AlertController, private loadCtrlr: LoadingController) {
    
  }

  public async ngOnInit() {
    this.prodSrv.updateList();    
  }


}
