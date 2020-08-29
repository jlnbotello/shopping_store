import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  private producto;
  constructor(private activeRoute: ActivatedRoute, private prodSrv: ProductoService) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(paramMap => {
      this.producto = this.prodSrv.obtenerPorId(paramMap.get("id"));
      alert(paramMap.get("id"));
    });
  }

  agregarProducto() {
    this.prodSrv.agregar(this.producto);
  }

}
