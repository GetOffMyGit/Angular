import { Component, OnInit } from '@angular/core';
// import 'gsap/src/minified/TweenMax.min.js';
// import * as TweenLite from 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js';
// import * as GSAP from 'gsap';
//import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';
// import * as ScrollMagic from 'scrollmagic';
// import { GSAP } from 'gsap/TweenLite.js';
// import { ScrollMagic } from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js';
// import { AnimationGSAP } from 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';
import * as ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

import { PageFadeTransition } from '../animations/router-animations';
import { ScrollAnimationsService } from '../animations/scroll-animations.service'; 

@Component({
    selector: 'page-one',
    templateUrl: './page-one.component.html',
    providers: [ScrollAnimationsService],
    animations: [PageFadeTransition],
    host: {
        '[class.content]' : 'true',
        '[@PageFadeTransition]': ''
    }
})
export class PageOneComponent implements OnInit {

    constructor(private scrollAnimationsService : ScrollAnimationsService) { }

    ngOnInit() {
        var controller = new ScrollMagic.Controller();

        var triggerElement = document.getElementById('triggerElement');

        var fadeToRedAnimation = this.scrollAnimationsService.getFadeToRedAnimation();

        // var enlarge = new TweenMax(".toRed", 1, {color: 'red'});

        // var enlarge = new ScrollMagic.TweenMax(triggerElement, 2, {width:"200px", height:"150px"});

        var scene = new ScrollMagic.Scene().setTween(fadeToRedAnimation).triggerElement(triggerElement).addTo(controller).addIndicators();
    }
}