import { trigger, state, animate, style, transition } from '@angular/core';


export const PageTranslate =
    trigger('PageTranslate', [
        state('void', style({ position: 'absolute', transform: 'translateY(-100%)'})),
        state('*', style({ position: 'absolute', transform: 'translateX(0%)'})),
        transition('* => void', animate('0.25s ease-in-out', style({ transform: 'translateY(100%)' })))
    ]);

// export const PageTranslateTransition =
//     trigger('PageTranslateTransition', [
//         state('void', style({ position: 'absolute', transform: 'translateX(-100%)'})),
//         state('*', style({ position: 'absolute', transform: 'translateX(0%)'})),
//         transition('void => *', animate('0.25s ease-in-out', style({ transform: 'translateX(0%)' }))),
//         transition('* => void', animate('0.25s ease-in-out', style({ transform: 'translateX(100%)' })))
//     ]);

export const PageFadeTransition =
    trigger('PageFadeTransition', [
        state('void', style({ position: 'absolute', filter: 'blur(1px)', opacity: '0'})),
        state('*', style({ position: 'absolute', filter: 'blur(0px)', opacity: '1'})),
        transition('void => *', animate('0.25s ease-in-out', style({ filter: 'blur(0px)', opacity: '1' }))),
        transition('* => void', animate('0.25s ease-in-out', style({ filter: 'blur(1px)', opacity: '0' })))
    ]);