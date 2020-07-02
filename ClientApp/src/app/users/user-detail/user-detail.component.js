"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDetailComponent = void 0;
var core_1 = require("@angular/core");
var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(superheroService, alertify, route) {
        this.superheroService = superheroService;
        this.alertify = alertify;
        this.route = route;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.loadSuperhero();
        this.route.data.subscribe(function (data) {
            _this.user = data['user'];
        });
    };
    UserDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-user-detail',
            templateUrl: './user-detail.component.html',
        })
    ], UserDetailComponent);
    return UserDetailComponent;
}());
exports.UserDetailComponent = UserDetailComponent;
//# sourceMappingURL=user-detail.component.js.map