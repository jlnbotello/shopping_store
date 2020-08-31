import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  /* private productos = [
    { id: "1",
      name: "Celular 1",
      price: 1500,
      img_url: "https://medias.musimundo.com/medias/sys_master/images/images/hf7/h32/10165904244766/00262251-138629-138629-01-138629-01.jpg" 
    },
    { id: "2",
      name: "Celular 2",
      price: 1000,
      img_url: "https://medias.musimundo.com/medias/sys_master/images/images/h08/ha3/10174596644894/00302226-139242-139242-01-139242-01.jpg" 
    },
    { id: "3",
      name: "Celular 3",
      price: 2000,
      img_url: "https://medias.musimundo.com/medias/sys_master/images/images/hf8/h94/10165992194078/00277018-138930-138930-01-138930-01.jpg" 
    }
  ]
 */
private productos:Array<Product> = [
    { id: "1",
      name: "Celular 1",
      price: 1500,
      img_url: "https://medias.musimundo.com/medias/sys_master/images/images/hf7/h32/10165904244766/00262251-138629-138629-01-138629-01.jpg",
    stock: 120
    },
    { id: "2",
      name: "Celular 2",
      price: 1230,
      img_url: "https://medias.musimundo.com/medias/sys_master/images/images/h08/ha3/10174596644894/00302226-139242-139242-01-139242-01.jpg",
      stock: 0
    },
    { id: "3",
      name: "Celular 3",
      price: 2000,
      img_url: "https://medias.musimundo.com/medias/sys_master/images/images/hf8/h94/10165992194078/00277018-138930-138930-01-138930-01.jpg",
      stock: 39
    },
    {
      id: "4",
      name: "TV LED",
      price: 2230,
      img_url: "https://medias.musimundo.com/medias/sys_master/images/images/hdb/he2/10166492528670/00242172-138231-138231-01-138231-01.jpg",
      stock: 23
    }
  ]
  constructor() { }

  public obtenerTodos() {
    return this.productos;
  }

  public obtenerPorId(id: string) {
    for (let prod of this.productos) {
      if (prod.id == id) {
        return prod;
      }
    }
  }

  public agregar(prod: Product) {
    this.productos.push(prod);
  }

}
