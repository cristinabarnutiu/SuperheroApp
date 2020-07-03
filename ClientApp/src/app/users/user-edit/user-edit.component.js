"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEditComponent = void 0;
var core_1 = require("@angular/core");
var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(route, alertify, userService, authService) {
        this.route = route;
        this.alertify = alertify;
        this.userService = userService;
        this.authService = authService;
    }
    UserEditComponent.prototype.unloadNotification = function ($event) {
        if (this.editForm.dirty) {
            $event.returnValue = true;
        }
    };
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.user = data['user'];
        });
        //this.displayUsername = this.user.name.toString();
    };
    UserEditComponent.prototype.updateUser = function () {
        var _this = this;
        this.userService.updateUser(this.authService.decodedToken.nameid, this.user)
            .subscribe(function (next) {
            _this.alertify.success('Profile updated successfully');
            //resets the dirty form back to initial state
            _this.editForm.reset(_this.user);
        }, function (error) { _this.alertify.error(error); });
    };
    __decorate([
        core_1.ViewChild('editForm', { static: true })
    ], UserEditComponent.prototype, "editForm", void 0);
    __decorate([
        core_1.HostListener('window:beforeunload', ['$event'])
    ], UserEditComponent.prototype, "unloadNotification", null);
    UserEditComponent = __decorate([
        core_1.Component({
            selector: 'app-user-edit',
            templateUrl: './user-edit.component.html',
            styleUrls: ['./user-edit.component.css']
        })
    ], UserEditComponent);
    return UserEditComponent;
}());
exports.UserEditComponent = UserEditComponent;
//# sourceMappingURL=user-edit.component.js.map