"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserListComponent = void 0;
var core_1 = require("@angular/core");
var UserListComponent = /** @class */ (function () {
    function UserListComponent(userService, alertify) {
        this.userService = userService;
        this.alertify = alertify;
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.loadUsers();
    };
    UserListComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (users) {
            _this.users = users;
        }, function (error) {
            _this.alertify.error(error);
            //this.alertify.error(error.toString());
        });
    };
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'app-user-list',
            templateUrl: './user-list.component.html',
            styleUrls: ['./user-list.component.css']
        })
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map