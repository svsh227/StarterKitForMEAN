import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {
    constructor(private _http: Http) { }
    get(url) {
        return this._http.get(url, {});
    }
}
