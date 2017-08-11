import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit{
    ngOnInit() {
        $('#navBarId').show();
    }

}