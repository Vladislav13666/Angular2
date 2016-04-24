import { Component, EventEmitter, Input, Output } from 'angular2/core';
import { People } from './people.service';

@Component({
    selector: 'my-people',
    templateUrl: 'App/people.component.html'
})
export class PeopleComponent {
    @Input() people: People;
}

