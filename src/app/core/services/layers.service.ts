import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayersService {
  private layersSource$ = new BehaviorSubject<Layers>(initialLayers);

  layers$(): Observable<Layers> {
    return this.layersSource$.asObservable();
  }

  openFoodDetailsBottomsheet(): void {
    this.layersSource$.next({
      ...this.getLayersCurrentValue(),
      foodDetailsBottomsheet: true,
    });
  }

  closeFoodDetailsBottomsheet(): void {
    this.layersSource$.next({
      ...this.getLayersCurrentValue(),
      foodDetailsBottomsheet: false,
    });
  }

  private getLayersCurrentValue(): Layers {
    return this.layersSource$.getValue();
  }
}

export interface Layers {
  foodDetailsBottomsheet: boolean;
}

export const initialLayers: Layers = {
  foodDetailsBottomsheet: false,
};
