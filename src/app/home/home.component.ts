import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import * as $ from 'jquery';
import * as ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

import { ScrollAnimationsService } from '../services/animations/animation.service';
import { PageTranslate } from '../services/animations/router-animation';
import { WindowReferenceService } from '../services/global-object.services/window-reference.service';

@Component({
    selector: 'home',
    templateUrl: './home.html',
    styleUrls: ['./home.scss'],
    providers: [],
    animations: [
        PageTranslate
    ],
    host: {
        '[@PageTranslate]' : ''
    }
})
export class HomeComponent implements OnInit {
    private _window: Window;

    constructor(
        private titleService : Title,
        private scrollAnimationsService: ScrollAnimationsService,
        private windowReferenceService: WindowReferenceService,
        private route: ActivatedRoute) {
        this._window = windowReferenceService.nativeWindow;
    }

    ngOnInit() {
        $('#navBarId').hide();

        this.titleService.setTitle("WTCSN");

        var controller = new ScrollMagic.Controller();
        var triggerElement = document.getElementById('triggerElement');
        var fadeToRedAnimation = this.scrollAnimationsService.getFadeToRedAnimation();
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