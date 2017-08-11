import { Injectable } from '@angular/core';
import { TweenMax, TimelineMax, Elastic } from 'gsap';

@Injectable()
export class IntroAnimationService {
    IntroLetterAnimation() {
        TweenMax.fromTo('#bigH', 1.5, { y: 200, opacity: 0 }, { y: 0, opacity: 1, ease: Elastic.easeOut.config(1, 0.4) }).delay(0.4);
        TweenMax.fromTo('#bigE', 1.5, { y: 200, opacity: 0 }, { y: 0, opacity: 1, ease: Elastic.easeOut.config(1, 0.4) }).delay(0.45);
        TweenMax.fromTo('#bigL', 1.5, { y: 200, opacity: 0 }, { y: 0, opacity: 1, ease: Elastic.easeOut.config(1, 0.4) }).delay(0.5);
        TweenMax.fromTo('#bigLTwo', 1.5, { y: 200, opacity: 0 }, { y: 0, opacity: 1, ease: Elastic.easeOut.config(1, 0.4) }).delay(0.55);
        TweenMax.fromTo('#bigO', 1.5, { y: 200, opacity: 0 }, { y: 0, opacity: 1, ease: Elastic.easeOut.config(1, 0.4) }).delay(0.6);
        
        TweenMax.fromTo('#bigT', 1.5, { y: 200, opacity: 0 }, { y: 0, opacity: 1, ease: Elastic.easeOut.config(1, 0.4) }).delay(0.65);
        TweenMax.fromTo('#bigHTwo', 1.5, { y: 200, opacity: 0 }, { y: 0, opacity: 1, ease: Elastic.easeOut.config(1, 0.4) }).delay(0.7);
        TweenMax.fromTo('#bigETwo', 1.5, { y: 200, opacity: 0 }, { y: 0, opacity: 1, ease: Elastic.easeOut.config(1, 0.4) }).delay(0.75);
        TweenMax.fromTo('#bigR', 1.5, { y: 200, opacity: 0 }, { y: 0, opacity: 1, ease: Elastic.easeOut.config(1, 0.4) }).delay(0.8);
        TweenMax.fromTo('#bigEThree', 1.5, { y: 200, opacity: 0 }, { y: 0, opacity: 1, ease: Elastic.easeOut.config(1, 0.4) }).delay(0.85);
    }
}