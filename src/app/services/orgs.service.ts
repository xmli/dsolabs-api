import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Request, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class OrgsService {
    constructor(private _http: Http) {
        console.log('OrgsService initialized...');
    }

    private proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    private propublicaUrl = 'https://projects.propublica.org/nonprofits/api/v2/organizations/';
    private guidestarUrl = 'https://quickstartdata.guidestar.org/v1/quickstartdetail/';
    private guidestarSearchUrl = 'https://quickstartdata.guidestar.org/v1/quickstartsearch';
    private foundationCenterUrl = "http://api.foundationcenter.org/research-dev/v1.1/";

    getProPublicaAPI(ein:number) {
        let headers = new Headers();
        headers.append('X-Requested-With', 'XMLHttpRequest');
        return this._http.get(this.proxyUrl + this.propublicaUrl + ein + '.json', { headers: headers })
            .map(res => res.json())
            .retry(2)
            .catch(error => Observable.throw(error.json().error || 'Server error'));
    }

    getGuideStarAPI(id:number) {
        let headers = new Headers();
        headers.append("Authorization", "Basic NjdiZDUwNmJlZjY1NDFjMTkyYmU4MWYxNThmNzI3YjU6");
        headers.append('X-Requested-With', 'XMLHttpRequest');
        return this._http.get(this.proxyUrl + this.guidestarUrl + id + '.json', { headers: headers })
            .map(res => res.json())
            .retry(3)
            .catch(error => Observable.throw(error.json().error || 'Server error'));
    }

    getGuideStarSearchAPI(params:string, pagenum:number=1) {
        console.log("String Param:" + params);
        let headers = new Headers();
        headers.append("Authorization", "Basic c2VhbmxpQGRzb2dsb2JhbC5vcmc6VzNkTjNzRDR5M0tLQDA5OA==");
        headers.append('X-Requested-With', 'XMLHttpRequest');
        let searchUrl = this.proxyUrl + this.guidestarSearchUrl + params + "&r=10" + "&p=" + pagenum;
        console.log(searchUrl);
        return this._http.get(searchUrl, { headers: headers })
            .map(res => res.json())
            .retry(3)
            .catch(error => Observable.throw(error.json().error || 'Server error'));
    }

    getFoundationCenterAPI(apiList:string, params:string) {
        let apiKey = "hftOJ088MeSTLJQqXSpK";
        let apiUrl = this.foundationCenterUrl + apiList + "?key=" + apiKey + "&" + params;
        console.log(apiUrl);
        return this._http.get(apiUrl)
            .map(res => res.json())
            .retry(2)
            .catch(error => Observable.throw(error.json().error || 'Server error'));
    }
    
}

