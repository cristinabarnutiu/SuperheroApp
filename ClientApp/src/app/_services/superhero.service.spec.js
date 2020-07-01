"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var superhero_service_1 = require("./superhero.service");
describe('SuperheroService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(superhero_service_1.SuperheroService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=superhero.service.spec.js.map