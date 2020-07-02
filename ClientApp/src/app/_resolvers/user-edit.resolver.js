"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEditResolver = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var UserEditResolver = /** @class */ (function () {
    function UserEditResolver(userService, authService, router, alertify) {
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.alertify = alertify;
    }
    UserEditResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUser(this.authService.decodedToken.nameid).pipe(operators_1.catchError(function (_) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/users']);
            return rxjs_1.of(null);
        }));
    };
    UserEditResolver = __decorate([
        core_1.Injectable()
    ], UserEditResolver);
    return UserEditResolver;
}());
exports.UserEditResolver = UserEditResolver;
//# sourceMappingURL=user-edit.resolver.js.map