import { Component, OnInit } from '@angular/core';
import { TweenMax, Elastic } from 'gsap';
import { IntroAnimationsService } from './intro-animations.service';

@Component({
    selector: 'intro',
    templateUrl: './intro.component.html',
    providers: [
        IntroAnimationsService
    ],
    styleUrls: ['./intro.component.scss'],
    host: {
    }
})
export class IntroComponent implements OnInit {
    constructor(private introAnimationService : IntroAnimationsService) {

    }

    ngOnInit() {
        this.introAnimationService.IntroLetterAnimation();
        // var introH = document.getElementById('bigP');
        // TweenMax.fromTo(introH, 2.5, { y: 200, opacity: 0 }, { y: 0, opacity: 1, ease: Elastic.easeOut.config(1, 0.3) })
        //     .delay(0.5);
    }
}