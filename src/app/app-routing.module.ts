import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomePageModule),
  },
  // {
  //   path: 'restaurant',
  //   loadChildren: () =>
  //     import('./features/restaurant/restaurant.module').then((m) => m.RestaurantModule),
  // },
  {
    path: 'ecommerce',
    loadChildren: () =>
      import('./features/ecommerce/ecommerce.module').then((m) => m.EcommercePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
