import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
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

        $("a").click(function(e) {
            var hash = window.location.hash;
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 300, "swing", function() {
                window.location.hash = hash;
            });
        });

//         $("a").on('click', function(event) {

//     // Make sure this.hash has a value before overriding default behavior
//     if (window.location.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();

//       // Store hash
//       var hash = window.location.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function(){
   
//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//     } // End if
//   });
    }
}