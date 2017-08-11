import { Injectable } from '@angular/core';
import { TweenMax, TimelineMax, Power3, Elastic } from 'gsap';

@Injectable()
export class TransitionAnimationService {
    PowerThreeAnimation(target) {
        TweenMax.fromTo(target, 1, { y: 200, opacity: 0 }, { y: 0, opacity: 1, ease: Power3.easeOut }).delay(0.4);
    }

    ElasticAnimation(target) {
        TweenMax.fromTo(target, 1, { y: 200, opacity: 0 }, { y: 0, opacity: 1, ease: Elastic.easeOut.config(1, 0.4) }).delay(0.4);
    }
}