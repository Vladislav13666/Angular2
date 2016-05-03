import { Component } from 'angular2/core';
import { People, PeopleService } from './people.service';
import { PeopleComponent } from './people.component';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    selector: 'my-people-list',
    templateUrl: 'App/people-list.component.html',
    styles: ['li {cursor: pointer;} .error {color:red;}'],
    directives: [ROUTER_DIRECTIVES]
    //directives: [PeopleComponent]
})
export class PeopleListComponent {
    errorMessage: string;
    peoples: People[];
    selectedPeople: People;

    constructor(private _peopleService: PeopleService) { }

    ngOnInit() {
        this.getPeoples();
    }


    getPeoples() {
        this._peopleService.getPeoples()
            .subscribe(
            peoples => this.peoples = peoples,
            error => this.errorMessage = <any>error
            );
    }

    select(people: People) {
    }
}
