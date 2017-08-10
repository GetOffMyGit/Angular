import { Component } from '@angular/core';
import { PageTranslateTransition } from '../animations/router-animations';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    animations: [PageTranslateTransition],
    host: {
        '[class.content]' : 'true',
        '[class.px-sm-2]' : 'true',
        '[class.px-md-5]' : 'true',
        '[@PageTranslateTransition]': ''
    }
})
export class AboutComponent {}