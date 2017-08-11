import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as $ from 'jquery';
import * as ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

import { ScrollAnimationsService } from '../animations/scroll-animation.service';
import { WindowReferenceService } from '../global-object.services/window-reference.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [ScrollAnimationsService,
        WindowReferenceService]
})
export class HomeComponent implements OnInit {
    private _window: Window;

    constructor(private scrollAnimationsService: ScrollAnimationsService, private windowReferenceService: WindowReferenceService, private route: ActivatedRoute) {
        this._window = windowReferenceService.nativeWindow;
    }

    ngOnInit() {
        $('#navBarId').hide();

        var controller = new ScrollMagic.Controller();

        var triggerElement = document.getElementById('triggerElement');

        var fadeToRedAnimation = this.scrollAnimationsService.getFadeToRedAnimation();

        // var enlarge = new TweenMax(".toRed", 1, {color: 'red'});

        // var enlarge = new ScrollMagic.TweenMax(triggerElement, 2, {width:"200px", height:"150px"});

        var scene = new ScrollMagic.Scene().setTween(fadeToRedAnimation).triggerElement(triggerElement).addTo(controller).addIndicators();

        var componentRef = this;
        $(".side-nav-link").click(function (e) {
            e.preventDefault();
            var hash = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 300, "swing", function () {
                componentRef._window.location.hash = hash;
            });
        });
    }
}