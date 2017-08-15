import { Injectable } from '@angular/core';
import { TweenMax, TimelineMax, Elastic, Power3 } from 'gsap';

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

@Injectable()
export class TransitionAnimationService {
    PowerThreeAnimation(target) {
        TweenMax.fromTo(target, 0.5, { y: 200, opacity: 0 }, { y: 0, opacity: 1, ease: Power3.easeOut }).delay(0.4);
    }

    ElasticAnimation(target) {
        TweenMax.fromTo(target, 1, { y: 200, opacity: 0 }, { y: 0, opacity: 1, ease: Elastic.easeOut.config(1, 0.4) }).delay(0.4);
    }
}

@Injectable()
export class RotationAnimationService {
    ClockwiseSmall(target) {
        TweenMax.fromTo(target, 1, { rotation: -20 }, { rotation: 0 });
    }

    ClockwiseInfinite(target) {
        TweenMax.to(target, 0.1, { rotation: 360, repeat: -1, yoyo: true });
    }

    SeesawInfinite(target) {
        TweenMax.fromTo(target, 0.08, { rotation: -30 }, { rotation: 30, repeat: -1, yoyo: true });
    }
}

@Injectable()
export class ScrollAnimationsService {
    getFadeToRedAnimation() : TweenMax {
        var redTimeLine = new TimelineMax();
        redTimeLine.to(".toRed", 5, { color: 'red'}).to(".toRed", 3, { rotation: '180' });
        return redTimeLine;
    }
}