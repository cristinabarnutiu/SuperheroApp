"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var angular_jwt_1 = require("@auth0/angular-jwt");
var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'app';
        this.jwtHelper = new angular_jwt_1.JwtHelperService();
    }
    AppComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('token');
        if (token) {
            this.authService.decodedToken = this.jwtHelper.decodeToken(token);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html'
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map