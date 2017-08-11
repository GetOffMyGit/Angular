import { Injectable } from '@angular/core';
import { TweenMax } from 'gsap';

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