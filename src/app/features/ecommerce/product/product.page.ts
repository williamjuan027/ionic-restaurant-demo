import { Component } from '@angular/core';
import { fadeAnimation, NavigationService, slideUpAnimation } from '@app/core';

@Component({
  selector: 'app-product',
  templateUrl: 'product.page.html',
  styleUrls: ['product.page.scss'],
  animations: [slideUpAnimation, fadeAnimation]
})
export class ProductPage {

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  product = {
      slides: [
          'https://images.unsplash.com/photo-1592728036073-d0ae31a18fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
          'https://images.unsplash.com/photo-1576417677416-6ca3adfb5435?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
          'https://images.unsplash.com/photo-1592727995117-4cdc7ee6fcb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
      ],
      name: 'White T-shirt',
      price: '$49.99',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availableSizes: ['S', 'M', 'L', 'XL'],
      selectedSize: 'M',
      availableColors: ['White', 'Gray', 'Black'],
      selectedColor: 'White'
  }

  constructor(private navigationService: NavigationService) {}

  selectSize(size: string): void {
      this.product.selectedSize = size;
  }

  selectColor(color: string): void {
      this.product.selectedColor = color;
  }
}
