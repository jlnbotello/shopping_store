import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    children: [
      {
        path: "",
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: ":id",
        loadChildren: () => import('./product/product.module').then(m => m.ProductPageModule)
      }
    ]
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(m => m.ProductPageModule)
  },
  {
    path: 'cart-list',
    loadChildren: () => import('./cart-list/cart-list.module').then(m => m.CartListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
