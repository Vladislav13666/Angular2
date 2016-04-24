"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var people_service_1 = require('./people.service');
var people_component_1 = require('./people.component');
var PeopleListComponent = (function () {
    function PeopleListComponent(_peopleService) {
        this._peopleService = _peopleService;
    }
    PeopleListComponent.prototype.ngOnInit = function () {
        this.getPeoples();
    };
    PeopleListComponent.prototype.getPeoples = function () {
        var _this = this;
        this._peopleService.getPeoples()
            .subscribe(function (peoples) { return _this.peoples = peoples; }, function (error) { return _this.errorMessage = error; });
    };
    PeopleListComponent.prototype.select = function (people) {
        this.selectedPeople = people;
    };
    PeopleListComponent = __decorate([
        core_1.Component({
            selector: 'my-people-list',
            templateUrl: 'App/people-list.component.html',
            styles: ['li {cursor: pointer;} .error {color:red;}'],
            directives: [people_component_1.PeopleComponent]
        }), 
        __metadata('design:paramtypes', [people_service_1.PeopleService])
    ], PeopleListComponent);
    return PeopleListComponent;
}());
exports.PeopleListComponent = PeopleListComponent;
//# sourceMappingURL=people-list.component.js.map