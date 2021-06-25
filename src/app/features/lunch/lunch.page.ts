import { Component } from '@angular/core';
import {
  LayersService,
  NavigationService,
  staggerFadeAnimation,
} from '@app/core';
import { IFoodCard } from '@app/shared';

@Component({
  selector: 'app-lunch',
  templateUrl: 'lunch.page.html',
  styleUrls: ['lunch.page.scss'],
  animations: [staggerFadeAnimation],
})
export class LunchPage {
  foodOptions: IFoodCard[] = [
    {
      name: 'Some Fancy Food',
      description: 'Some fancy food description',
      image: 'assets/images/food-bread.png',
    },
    {
      name: 'Some Fancy Food',
      description: 'Some fancy food description',
      image: 'assets/images/food-avocado.png',
    },
    {
      name: 'Some Fancy Food',
      description: 'Some fancy food description',
      image: 'assets/images/food-rice-shrimp.png',
    },
  ];

  constructor(
    private navigationService: NavigationService,
    private layersService: LayersService
  ) {}

  back(): void {
    this.navigationService.back();
  }

  openFoodDetailsBottomsheet(): void {
    this.layersService.openFoodDetailsBottomsheet();
  }
}
