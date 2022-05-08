import { Component } from '@angular/core';
import { AppRoutes, NavigationService, staggerFadeAnimation } from '@app/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [staggerFadeAnimation],
})
export class HomePage {
  options: { name: string, options: { name: string, icon: string, color: string, description: string, onTap: () => void }[]}[] = [
    {
      name: 'E-Commerce',
      options: [
        {
          name: 'Product',
          icon: 'tv-outline',
          color: '#F973D1',
          description: 'Your typical product page with carousels to view product images and a sheet with product information',
          onTap: () => this.navigationService.navigateTo(AppRoutes.ecommerce.product)
        },
        // NOT IMPLEMENTED
        // {
        //   name: 'Cart',
        //   icon: 'basket-outline',
        //   color: '#4ADE80',
        //   description: 'A page (can also be a modal) displaying the contents of your cart and an option to checkout',
        //   onTap: () => {}
        // }
      ]
    }
  ]

  constructor(private navigationService: NavigationService) {}
}
