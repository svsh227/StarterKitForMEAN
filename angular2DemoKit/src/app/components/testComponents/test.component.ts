import { Component } from '@angular/core';
import { HttpService } from '../../services/http.services';
import { Response } from '@angular/http';

@Component({
    selector: 'test-component',
    templateUrl: 'test.component.html',
    styleUrls: ['test.component.css'],

})

export class TestComponent {
    constructor(private httpServices: HttpService) {
        this.getURLTest();
    }

    public test = 'Test Page';

    getURLTest() {
        this.httpServices.get('http://localhost:3000/test')
            .subscribe((response: Response) => {
                console.log(response);
            }, (err: Response) => {
                console.log(err);
            });
    }
}