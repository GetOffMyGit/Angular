import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as $ from 'jquery';

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit{
    constructor(
        private titleService : Title
    ) {

    }

    ngOnInit() {
        $('#navBarId').show();

        this.titleService.setTitle("Posts");
    }

}