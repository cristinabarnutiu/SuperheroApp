"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperheroService = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("../../environments/environment");
var http_1 = require("@angular/common/http");
var httpOptions = {
    headers: new http_1.HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
};
var SuperheroService = /** @class */ (function () {
    function SuperheroService(http) {
        this.http = http;
        this.baseUrl = environment_1.environment.apiUrl;
    }
    SuperheroService.prototype.getSuperheroes = function () {
        return this.http.get(this.baseUrl + 'superheroes', httpOptions);
    };
    SuperheroService.prototype.getSuperhero = function (id) {
        return this.http.get(this.baseUrl + 'superheroes/' + id, httpOptions);
    };
    SuperheroService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], SuperheroService);
    return SuperheroService;
}());
exports.SuperheroService = SuperheroService;
//# sourceMappingURL=superhero.service.js.map