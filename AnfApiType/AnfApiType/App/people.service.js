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
var http_1 = require('angular2/http');
var Rx_1 = require('rxjs/Rx');
var People = (function () {
    function People(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return People;
}());
exports.People = People;
var PeopleService = (function () {
    function PeopleService(_http) {
        this._http = _http;
        this.base_url = 'api/People/';
    }
    PeopleService.prototype.getPeoples = function () {
        return this._http.get(this.base_url)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(data); })
            .catch(this.handleError);
    };
    PeopleService.prototype.getPeopleById = function (id) {
        return this._http.get(this.base_url + id).map(function (response) { return response.json(); })
            .do(function (data) { return console.log(data); })
            .catch(this.handleError);
    };
    PeopleService.prototype.handleError = function (error) {
        console.error(error);
        return Rx_1.Observable.throw(error.json().error || 'Server error');
    };
    PeopleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PeopleService);
    return PeopleService;
}());
exports.PeopleService = PeopleService;
//# sourceMappingURL=people.service.js.map