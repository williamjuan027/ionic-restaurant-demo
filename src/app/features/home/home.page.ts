import { Component } from '@angular/core';
import { AppRoutes, NavigationService, staggerFadeAnimation } from '@app/core';
import { IOption } from '@app/shared';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [staggerFadeAnimation],
})
export class HomePage {
  options: IOption[] = [
    {
      name: 'reservation',
      image: 'assets/images/main-reservation.png',
      onTap: () => {},
    },
    {
      name: 'lunch',
      image: 'assets/images/main-lunch.png',
      onTap: () => {
        this.navigationService.navigateTo(AppRoutes.lunch);
      },
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

  constructor(private navigationService: NavigationService) {}
}
