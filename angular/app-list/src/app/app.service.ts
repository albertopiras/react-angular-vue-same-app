import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { Friend } from './components/friend';


@Injectable()
export class AppService {

    constructor(private http: HttpClient) { }

    getFriends() {
        console.log('API CALL');
        return this.http.get('assets/friends.json');
    }

}