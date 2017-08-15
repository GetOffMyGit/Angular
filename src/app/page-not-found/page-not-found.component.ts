import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as $ from 'jquery';

@Component({
    selector: 'page-found-found',
    templateUrl: './page-not-found.html'
})
export class PageNotFoundComponent implements OnInit{
    constructor(
        private titleService : Title
    ) {

    }

    ngOnInit() {
        $('#navBarId').show();

        this.titleService.setTitle("Page Not Found");
    }

}