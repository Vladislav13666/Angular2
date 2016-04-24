import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

export class People {
    constructor(public id: number, public firstName: string, public lastName:string) { }
}

@Injectable()
export class PeopleService {
    constructor(private _http: Http) { }

    getPeoples() {
        return this._http.get('api/People')
            .map((response: Response) => <People[]>response.json())
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
