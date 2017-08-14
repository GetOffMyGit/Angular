import { Component, OnInit } from '@angular/core';
import { IntroAnimationService } from '../animations/intro-animation.service';

@Component({
    selector: 'intro',
    templateUrl: './intro.component.html',
    providers: [],
    styleUrls: ['./intro.component.scss'],
    host: {
    }
})
export class IntroComponent implements OnInit {
    constructor(private introAnimationService : IntroAnimationService) {

    }

    ngOnInit() {
        this.introAnimationService.IntroLetterAnimation();
    }
}