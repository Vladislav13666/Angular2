import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';

import { People, PeopleService } from './people.service';
import { PeopleListComponent } from './people-list.component';

@Component({
    selector: 'my-app',
    template: '<my-people-list></my-people-list>',
    directives: [PeopleListComponent],
    providers: [
        HTTP_PROVIDERS,
        PeopleService
    ]
})
export class AppComponent { }