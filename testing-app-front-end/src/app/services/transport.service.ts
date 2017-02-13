import {Injectable} from '@angular/core';
import {Http, Response, Headers, URLSearchParams, ResponseContentType, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
//import {StoreService} from './services/store.service';

@Injectable()
export class TransportService {
    private token: string = '';

    setToken(token) {
        this.token = token;
       // this.store.set('TimeSheetsToken', token);
    }

    createAuthorizationHeader(headers: Headers) {
        headers.append('Authorization', this.token);
    }

    constructor(private http: Http) {
    }

    get(relativeUrl, params?): Observable<Response> {
        let headers = new Headers();
        let url = `${environment.BASE_URL}${relativeUrl}`;
        if (this.token) {
            this.createAuthorizationHeader(headers);
        }
        return this.http.get(url, {
            headers: headers,
            search:params
        });
    }

    post(relativeUrl, data) {
        let headers = new Headers();
        let url = `${environment.BASE_URL}${relativeUrl}`;
        if (this.token) {
            this.createAuthorizationHeader(headers);
        }
        return this.http.post(url, data, {headers: headers});
    }
}
