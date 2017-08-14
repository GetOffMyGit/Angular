import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { WindowReferenceService } from '../global-object.services/window-reference.service';
import { TransitionAnimationService } from '../animations/transition-animation.service';
import { RotationAnimationService } from '../animations/rotation-animation.service';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: [
        './about.component.scss'
    ],
    providers: []
})
export class AboutComponent implements OnInit {
    private _window : Window;

    constructor(
        private pageLoadAnimationsService: TransitionAnimationService,
        private rotationAnimationService : RotationAnimationService,
        private windowReferenceService : WindowReferenceService) {
            this._window = windowReferenceService.nativeWindow;
        }

    ngOnInit() {
        $('#navBarId').show();

        var content = document.getElementById('content');
        var triggered = document.getElementById('triggered');

        this.pageLoadAnimationsService.ElasticAnimation(content);
        //this.rotationAnimationService.ClockwiseSmall(content);
        this.rotationAnimationService.ClockwiseInfinite(triggered);
    }
}