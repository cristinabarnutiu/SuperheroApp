"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavMenuComponent = void 0;
var core_1 = require("@angular/core");
var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent(authService, alertify, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.router = router;
        //this will store out username and password
        this.model = {};
        //from the framework
        this.isexpanded = false;
    }
    NavMenuComponent.prototype.ngOnInit = function () {
    };
    NavMenuComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model).subscribe(function (next) {
            _this.alertify.success('You have successfully logged in');
        }, function (error) { _this.alertify.error(error); }, function () { _this.router.navigate(['/superhero-list']); });
    };
    //a method to determine whether the user is logged in
    NavMenuComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    NavMenuComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        this.alertify.message('You have successfully logged out');
        this.router.navigate(['/home']);
    };
    NavMenuComponent.prototype.collapse = function () { this.isexpanded = false; };
    NavMenuComponent.prototype.toggle = function () { this.isexpanded = !this.isexpanded; };
    NavMenuComponent = __decorate([
        core_1.Component({
            selector: 'app-nav-menu',
            templateUrl: './nav-menu.component.html',
            styleUrls: ['./nav-menu.component.css']
        })
    ], NavMenuComponent);
    return NavMenuComponent;
}());
exports.NavMenuComponent = NavMenuComponent;
//# sourceMappingURL=nav-menu.component.js.map