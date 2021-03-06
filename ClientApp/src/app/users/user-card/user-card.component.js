"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCardComponent = void 0;
var core_1 = require("@angular/core");
var UserCardComponent = /** @class */ (function () {
    function UserCardComponent() {
    }
    UserCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], UserCardComponent.prototype, "user", void 0);
    UserCardComponent = __decorate([
        core_1.Component({
            selector: 'app-user-card',
            templateUrl: './user-card.component.html',
            styleUrls: ['./user-card.component.css']
        })
    ], UserCardComponent);
    return UserCardComponent;
}());
exports.UserCardComponent = UserCardComponent;
//# sourceMappingURL=user-card.component.js.map