import { trigger, state, animate, style, transition } from '@angular/core';

/*
export const slideToLeft =
    trigger('slideToLeft', [
        state('void', style({ position: 'fixed', width: '100%' })),
        state('*', style({ position: 'fixed', width: '100%' })),
        transition(':enter' , [
            style({ transform: 'translateX(100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ]),
        transition(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ])
    ]); */

// export const pageOneTransitions =
//     trigger('pageOneTransitions', [
//         state('void', style({ position: 'absolute', transform: 'translateX(-100%)', opacity: '0'})),
//         state('*', style({ position: 'absolute', transform: 'translateX(0%)', opacity: '1'})),
//         transition('void => *', animate('0.5s ease-in-out', style({ transform: 'translateX(0%)', opacity: '1' }))),
//         transition('* => void', animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)', opacity: '0' })))
//     ]);

// export const pageTwoTransitions =
//     trigger('pageTwoTransitions', [
//         state('void', style({ position: 'absolute', transform: 'translateY(100%)', opacity: '0'})),
//         state('*', style({ position: 'absolute', transform: 'translateY(0%)', opacity: '1'})),
//         transition('void => *', animate('0.5s ease-in-out', style({ transform: 'translateY(0%)', opacity: '1' }))),
//         transition('* => void', animate('0.5s ease-in-out', style({ transform: 'translateY(100%)', opacity: '0' })))
//     ]);

// export const pageThreeTransitions =
//     trigger('pageThreeTransitions', [
//         state('void', style({ position: 'absolute', transform: 'translateX(100%)', opacity: '0'})),
//         state('*', style({ position: 'absolute', transform: 'translateX(0%)', opacity: '1'})),
//         transition('void => *', animate('0.5s ease-in-out', style({ transform: 'translateX(0%)', opacity: '1' }))),
//         transition('* => void', animate('0.5s ease-in-out', style({ transform: 'translateX(100%)', opacity: '0' })))
//     ]);

export const PageFadeTransition =
    trigger('PageFadeTransition', [
        state('void', style({ position: 'absolute', filter: 'blur(1px)', opacity: '0'})),
        state('*', style({ position: 'absolute', filter: 'blur(0px)', opacity: '1'})),
        transition('void => *', animate('0.25s ease-in-out', style({ filter: 'blur(0px)', opacity: '1' }))),
        transition('* => void', animate('0.25s ease-in-out', style({ filter: 'blur(1px)', opacity: '0' })))
    ]);