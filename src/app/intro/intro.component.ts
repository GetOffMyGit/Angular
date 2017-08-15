import { Component, OnInit } from '@angular/core';
import { IntroAnimationService } from '../services/animations/animation.service';

@Component({
    selector: 'intro',
    templateUrl: './intro.html',
    providers: [],
    styleUrls: ['./intro.scss'],
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