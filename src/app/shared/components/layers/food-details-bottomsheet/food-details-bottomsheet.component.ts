import { Component } from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { fadeAnimation, LayersService, slideUpAnimation } from '@app/core';
import { animateChild, query, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-food-details-bottomsheet',
  templateUrl: 'food-details-bottomsheet.component.html',
  animations: [
    fadeAnimation,
    slideUpAnimation,
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

  constructor(private layersService: LayersService) {}

  close(): void {
    this.layersService.closeFoodDetailsBottomsheet();
  }
}
