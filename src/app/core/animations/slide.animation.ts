import { trigger, transition, style, animate } from '@angular/animations';

export const slideUpAnimation = trigger('slideUp', [
  transition(':enter', [
    style({ transform: 'translate(0,500px)' }),
    animate(
      '350ms cubic-bezier(0.17, 0.89, 0.24, 1.11)',
      style({ transform: 'translate(0,0)' })
    ),
  ]),
  transition(':leave', [
    animate('300ms ease-in-out', style({ transform: 'translate(0,500px)' })),
  ]),
]);
