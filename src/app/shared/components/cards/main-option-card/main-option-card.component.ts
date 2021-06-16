import { Component, Input } from '@angular/core';

export interface IOption {
  name: string;
  image: string;
  onTap: () => void;
}

@Component({
  selector: 'app-main-option-card',
  templateUrl: 'main-option-card.component.html',
  styleUrls: ['./main-option-card.component.scss'],
})
export class MainOptionCardComponent {
  @Input() option: IOption;
}
