import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {DashboardComponent} from './dashboard.component';
import { PeopleComponent } from './people.component';
import { PeopleService } from './people.service';
import { PeopleListComponent } from './people-list.component';

@Component({
    selector: 'my-app',
    template: `   
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Peoples']">Peoples</a>      
    </nav>
    <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        PeopleService
    ]
})

@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent
    },
    {
        path: '/peoples',
        name: 'Peoples',
        component: PeopleListComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'PeopleDetail',
        component: PeopleComponent
    }
])
export class AppComponent { }