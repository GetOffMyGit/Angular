import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as $ from 'jquery';

import { WindowReferenceService } from '../services/global-object.services/window-reference.service';
import {    TransitionAnimationService,
            RotationAnimationService } from '../services/animations/animation.service';
import { PageTranslate } from '../services/animations/router-animation';

@Component({
    selector: 'about',
    templateUrl: './about.html',
    styleUrls: [
        './about.scss'
    ],
    providers: [],
    animations: [
        PageTranslate
    ],
    host: {
        '[@PageTranslate]' : ''
    }
})
export class AboutComponent implements OnInit {
    private _window : Window;

    constructor(
        private titleService : Title,
        private transitionAnimationsService: TransitionAnimationService,
        private rotationAnimationService : RotationAnimationService,
        private windowReferenceService : WindowReferenceService) {
            this._window = windowReferenceService.nativeWindow;
        }

    ngOnInit() {
        $('#navBarId').show();

        this.titleService.setTitle("About");

        var content = document.getElementById('content');
        var triggered = document.getElementById('triggered');

        this.transitionAnimationsService.PowerThreeAnimation(content);
        //this.rotationAnimationService.ClockwiseSmall(content);
        //this.rotationAnimationService.ClockwiseInfinite(triggered);
    }
}