import { Component } from '@angular/core';
import { PageTranslateTransition } from '../animations/router-animations';

@Component({
    selector: 'page-two',
    templateUrl: './page-two.component.html',
    animations: [PageTranslateTransition],
    host: {
        '[class.content]' : 'true',
        '[@PageTranslateTransition]': ''
    }
})
export class PageTwoComponent {}