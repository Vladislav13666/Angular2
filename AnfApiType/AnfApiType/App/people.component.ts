import { Component, EventEmitter, Input, Output, OnInit } from 'angular2/core';
import { People, PeopleService } from './people.service';
import { RouteParams } from 'angular2/router';

@Component({
    selector: 'my-people',
    templateUrl: 'App/people.component.html'
})
export class PeopleComponent implements OnInit {
    errorMessage: string;
    people: People;
    constructor(private _peopleService: PeopleService, private _routeParams: RouteParams)
    { }
    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._peopleService.getPeopleById(id).subscribe(
            people => this.people = people,
            error => this.errorMessage = <any>error
        );
    }
    //@Input() people: People;
}

