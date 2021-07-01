import { Component } from '@angular/core';

@Component({
  selector: 'app-options-drawer',
  templateUrl: 'options-drawer.component.html',
})
export class OptionsDrawerComponent {
  drawerOptions: { name: string; type: 'sectionHeader' | 'option' }[] = [
    {
      name: 'Starters',
      type: 'sectionHeader',
    },
    {
      name: 'Salad',
      type: 'option',
    },
    {
      name: 'Soup',
      type: 'option',
    },
    {
      name: 'Entrees',
      type: 'sectionHeader',
    },
    {
      name: 'Pasta',
      type: 'option',
    },
    {
      name: 'Pizza',
      type: 'option',
    },
    {
      name: 'Seafood',
      type: 'option',
    },
    {
      name: 'Desserts',
      type: 'sectionHeader',
    },
    {
      name: 'Icecream',
      type: 'option',
    },
    {
      name: 'Cake',
      type: 'option',
    },
  ];
}
