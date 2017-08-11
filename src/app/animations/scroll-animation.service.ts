import { Injectable } from '@angular/core';
import { TweenMax, TimelineMax } from 'gsap';

@Injectable()
export class ScrollAnimationsService {
    getFadeToRedAnimation() : TweenMax {
        var redTimeLine = new TimelineMax();
        redTimeLine.to(".toRed", 5, { color: 'red'}).to(".toRed", 3, { rotation: '180' });
        return redTimeLine;
    }
}