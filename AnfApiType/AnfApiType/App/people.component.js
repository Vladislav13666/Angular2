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
var router_1 = require('angular2/router');
var PeopleComponent = (function () {
    function PeopleComponent(_peopleService, _routeParams) {
        this._peopleService = _peopleService;
        this._routeParams = _routeParams;
    }
    PeopleComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this._routeParams.get('id');
        this._peopleService.getPeopleById(id).subscribe(function (people) { return _this.people = people; }, function (error) { return _this.errorMessage = error; });
    };
    PeopleComponent = __decorate([
        core_1.Component({
            selector: 'my-people',
            templateUrl: 'App/people.component.html'
        }), 
        __metadata('design:paramtypes', [people_service_1.PeopleService, router_1.RouteParams])
    ], PeopleComponent);
    return PeopleComponent;
}());
exports.PeopleComponent = PeopleComponent;
//# sourceMappingURL=people.component.js.map