import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from '../models';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router, private location: Location) {}

  navigateTo(path: AppRoutes): void {
    this.router.navigate([path]);
  }

  back(): void {
    this.location.back();
  }
}
