import {animate, animateChild, group, query, style, transition, trigger} from '@angular/animations';

export const fader =
  trigger('routeAnimations', [
    transition('* <=> *', [
      // Set a default  style for enter and leave
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(100%)',
        }),
      ]),
      // Animate the new page in
      query(':enter', [
        animate('600ms ease', style({opacity: 1, transform: 'scale(1) translateY(0)'})),
      ])
    ]),
  ]);
export const slider =
  trigger('routeAnimations', [
    transition('* => isLeft', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], {optional: true}),
      query(':enter', [
        style({left: '-100%'})
      ]),
      group([
        query(':leave', [
          animate('300ms ease', style({left: '100%'}))
        ], {optional: true}),
        query(':enter', [
          animate('300ms ease', style({left: '0%'}))
        ])
      ]),
    ]),
    transition('* => isRight', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%'
        })
      ], {optional: true}),
      query(':enter', [
        style({right: '-100%'})
      ]),
      group([
        query(':leave', [
          animate('300ms ease', style({right: '100%'}))
        ], {optional: true}),
        query(':enter', [
          animate('300ms ease', style({right: '0%'}))
        ])
      ]),
    ]),
    transition('isRight => *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%'
        })
      ], {optional: true}),
      query(':enter', [
        style({left: '-100%'})
      ]),
      group([
        query(':leave', [
          animate('300ms ease', style({left: '100%'}))
        ], {optional: true}),
        query(':enter', [
          animate('300ms ease', style({left: '0%'}))
        ])
      ]),
    ]),
    transition('isLeft => *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%'
        })
      ], {optional: true}),
      query(':enter', [
        style({right: '-100%'})
      ]),
      group([
        query(':leave', [
          animate('300ms ease', style({right: '100%'}))
        ], {optional: true}),
        query(':enter', [
          animate('300ms ease', style({right: '0%'}))
        ])
      ]),
    ])
  ]);

// export const slider =
//   trigger('routeAnimations', [
//     transition('* => isLeft', slideTo('left') ),
//     transition('* => isRight', slideTo('right') ),
//     transition('isRight => *', slideTo('left') ),
//     transition('isLeft => *', slideTo('right') )
//   ]);
//
// export function slideTo(direction) {
//   const optional = { optional: true };
//   return [
//     query(':enter, :leave', [
//       style({
//         position: 'absolute',
//         top: 0,
//         [direction]: 0,
//         width: '100%'
//       })
//     ], optional),
//     query(':enter', [
//       style({ [direction]: '-100%'})
//     ]),
//     group([
//       query(':leave', [
//         animate('300ms ease', style({ [direction]: '100%'}))
//       ], optional),
//       query(':enter', [
//         animate('300ms ease', style({ [direction]: '0%'}))
//       ])
//     ]),
//     // Normalize the page style... Might not be necessary
//
//     // Required only if you have child animations on the page
//     // query(':leave', animateChild()),
//     // query(':enter', animateChild()),
//   ];
// }
// export const slideINAnimation =
//   trigger('routeAnimations', [
//     transition('listVessels <=> detailVessel', [
//       style({ position: 'relative' }),
//       query(':enter, :leave', [
//         style({
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%'
//         })
//       ]),
//       query(':enter', [
//         style({ left: '-100%'})
//       ]),
//       query(':leave', animateChild()),
//       group([
//         query(':leave', [
//           animate('300ms ease-out', style({ left: '100%'}))
//         ]),
//         query(':enter', [
//           animate('300ms ease-out', style({ left: '0%'}))
//         ])
//       ]),
//       query(':enter', animateChild()),
//     ]),
//     transition('* <=> FilterPage', [
//       style({ position: 'relative' }),
//       query(':enter, :leave', [
//         style({
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%'
//         })
//       ]),
//       query(':enter', [
//         style({ left: '-100%'})
//       ]),
//       query(':leave', animateChild()),
//       group([
//         query(':leave', [
//           animate('200ms ease-out', style({ left: '100%'}))
//         ]),
//         query(':enter', [
//           animate('300ms ease-out', style({ left: '0%'}))
//         ])
//       ]),
//       query(':enter', animateChild()),
//     ])
//   ]);
