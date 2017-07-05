import { Component } from '@angular/core';
import { PageFadeTransition } from '../animations/router-animations';

@Component({
    selector: 'page-three',
    templateUrl: './page-three.component.html',
    animations: [PageFadeTransition],
    host: {
        '[class.content]' : 'true',
        '[@PageFadeTransition]': ''
    }
})
export class PageThreeComponent {}