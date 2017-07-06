import { Injectable } from '@angular/core';

function _window() : any {
    return window;
}

@Injectable()
export class WindowReferenceService {
    get nativeWindow() : any {
        return _window();
    }
}