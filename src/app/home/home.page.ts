import { Component } from '@angular/core';
import { staggerFadeAnimation } from '../core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [staggerFadeAnimation],
})
export class HomePage {
  options: { name: string; image: string; onTap: () => void }[] = [
    {
      name: 'reservation',
      image: 'assets/images/main-reservation.png',
      onTap: () => {},
    },
    {
      name: 'lunch',
      image: 'assets/images/main-lunch.png',
      onTap: () => {},
    },
    {
      name: 'dinner',
      image: 'assets/images/main-dinner.png',
      onTap: () => {},
    },
    {
      name: 'wine',
      image: 'assets/images/main-wine.png',
      onTap: () => {},
    },
  ];

  constructor() {}
}
