import { Component } from '@angular/core';
import { PageFadeTransition } from '../animations/router-animations';

@Component({
    selector: 'page-two',
    templateUrl: './page-two.component.html',
    animations: [PageFadeTransition],
    host: {
        '[class.content]' : 'true',
        '[@PageFadeTransition]': ''
    }
})
export class PageTwoComponent {}