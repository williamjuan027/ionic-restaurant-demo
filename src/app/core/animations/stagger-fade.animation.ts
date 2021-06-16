import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
} from '@angular/animations';

export const staggerFadeAnimation = trigger('staggerFade', [
  transition(':enter', [
    query(':enter', [
      style({ opacity: 0, transform: 'translate(0,10px)' }),
      stagger('150ms', [
        animate(
          '500ms 200ms',
          style({ opacity: 1, transform: 'translate(0,0)' })
        ),
      ]),
    ]),
  ]),
  transition(':leave', [
    query(':leave', [
      stagger('150ms', [
        animate('500ms', style({ opacity: 0, transform: 'translate(0,10px)' })),
      ]),
    ]),
  ]),
]);
