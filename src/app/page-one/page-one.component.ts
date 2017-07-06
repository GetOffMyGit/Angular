import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as $ from 'jquery';
import * as ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

import { PageFadeTransition } from '../animations/router-animations';
import { ScrollAnimationsService } from '../animations/scroll-animations.service';
import { WindowReferenceService } from '../global-object.services/window-reference.service';

@Component({
    selector: 'page-one',
    templateUrl: './page-one.component.html',
    providers: [ScrollAnimationsService,
        WindowReferenceService],
    animations: [PageFadeTransition],
    host: {
        '[class.content]': 'true',
        '[@PageFadeTransition]': ''
    }
})
export class PageOneComponent implements OnInit {
    private _window: Window;

    constructor(private scrollAnimationsService: ScrollAnimationsService, private windowReferenceService: WindowReferenceService, private route: ActivatedRoute) {
        this._window = windowReferenceService.nativeWindow;
    }

    ngOnInit() {
        var controller = new ScrollMagic.Controller();

        var triggerElement = document.getElementById('triggerElement');

        var fadeToRedAnimation = this.scrollAnimationsService.getFadeToRedAnimation();

        // var enlarge = new TweenMax(".toRed", 1, {color: 'red'});

        // var enlarge = new ScrollMagic.TweenMax(triggerElement, 2, {width:"200px", height:"150px"});

        var scene = new ScrollMagic.Scene().setTween(fadeToRedAnimation).triggerElement(triggerElement).addTo(controller).addIndicators();

        var componentRef = this;
        $(".side-nav-link").click(function (e) {
            // componentRef.route.fragment.subscribe((fragment : string) => {
            //     //var hash = componentRef._window.location.hash;
            //     console.log(fragment);
            //     e.preventDefault();
            //     $('html, body').animate({
            //         scrollTop: $(fragment).offset().top
            //     }, 300, "swing", function () {
            //         window.location.hash = fragment;
            //     });
            // });

            e.preventDefault();
            //var hash = componentRef._window.location.hash;
            //console.log(hash);
            //var nativeWindow = componentRef.windowReferenceService.nativeWindow.location.hash;
            var hash = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 300, "swing", function () {
                componentRef._window.location.hash = hash;
            });
        });
    }
}