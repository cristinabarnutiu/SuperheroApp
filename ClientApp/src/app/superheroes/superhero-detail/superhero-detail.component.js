"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperheroDetailComponent = void 0;
var core_1 = require("@angular/core");
var ngx_gallery_1 = require("@kolkov/ngx-gallery");
var SuperheroDetailComponent = /** @class */ (function () {
    function SuperheroDetailComponent(superheroService, alertify, route) {
        this.superheroService = superheroService;
        this.alertify = alertify;
        this.route = route;
    }
    SuperheroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.loadSuperhero();
        this.route.data.subscribe(function (data) {
            _this.superhero = data['superhero'];
        });
        //this.route.queryParams.subscribe(params => {
        //  const selectedTab = params['tab'];
        //  this.superheroTabs.tabs[selectedTab > 0 ? selectedTab : 0].active = true;
        //});
        this.galleryOptions = [
            {
                width: '500px',
                height: '500px',
                imagePercent: 100,
                thumbnailsColumns: 4,
                imageAnimation: ngx_gallery_1.NgxGalleryAnimation.Slide,
                preview: false,
            }
        ];
        this.galleryImages = this.getImages();
    };
    SuperheroDetailComponent.prototype.getImages = function () {
        var imageUrls = [];
        for (var _i = 0, _a = this.superhero.photos; _i < _a.length; _i++) {
            var photo = _a[_i];
            imageUrls.push({
                small: photo.url,
                medium: photo.url,
                big: photo.url,
                description: photo.description,
            });
        }
        return imageUrls;
    };
    SuperheroDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-superhero-detail',
            templateUrl: './superhero-detail.component.html',
            styleUrls: ['./superhero-detail.component.css']
        })
    ], SuperheroDetailComponent);
    return SuperheroDetailComponent;
}());
exports.SuperheroDetailComponent = SuperheroDetailComponent;
//# sourceMappingURL=superhero-detail.component.js.map