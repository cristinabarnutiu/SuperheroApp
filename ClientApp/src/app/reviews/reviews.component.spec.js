"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var reviews_component_1 = require("./reviews.component");
describe('ReviewsComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [reviews_component_1.ReviewsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(reviews_component_1.ReviewsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=reviews.component.spec.js.map