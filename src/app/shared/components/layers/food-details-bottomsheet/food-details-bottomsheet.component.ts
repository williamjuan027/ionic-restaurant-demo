import { Component } from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { fadeAnimation, LayersService, slideUpAnimation } from '@app/core';
import {
  animate,
  animateChild,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-food-details-bottomsheet',
  templateUrl: 'food-details-bottomsheet.component.html',
  animations: [
    fadeAnimation,
    slideUpAnimation,
    trigger('patch', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1ms 100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('1ms', style({ opacity: 0 }))]),
    ]),
    trigger('container', [
      transition(':enter, :leave', [
        query('@*', animateChild(), { optional: true }),
      ]),
    ]),
  ],
})
export class FoodDetailsBottomsheetComponent {
  isOpen$ = this.layersService.layers$().pipe(
    map((layers) => layers.foodDetailsBottomsheet),
    distinctUntilChanged()
  );

  food = {
    name: 'Some Fancy Food',
    image: 'assets/images/food-avocado.png',
    caption: 'Some fancy food caption',
    description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  };

  constructor(private layersService: LayersService) {}

  close(): void {
    this.layersService.closeFoodDetailsBottomsheet();
  }
}
