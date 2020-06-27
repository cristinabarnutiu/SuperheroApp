"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var alertify_service_1 = require("./alertify.service");
describe('AlertifyService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(alertify_service_1.AlertifyService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=alertify.service.spec.js.map