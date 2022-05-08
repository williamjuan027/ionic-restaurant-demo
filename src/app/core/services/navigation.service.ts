import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router, private location: Location) {}

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  back(): void {
    this.location.back();
  }
}
