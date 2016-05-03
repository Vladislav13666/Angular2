import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

export class People {
    constructor(public id: number, public firstName: string, public lastName: string) { }
}

@Injectable()
export class PeopleService {
    private base_url: string = 'api/People/';
    constructor(private _http: Http) { }

    getPeoples(): Observable<People[]> {
        return this._http.get(this.base_url)
            .map((response: Response) => <People[]>response.json())
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    getPeopleById(id: number): Observable<People> {
        return this._http.get(this.base_url + id).map((response: Response) => <People>response.json())
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
