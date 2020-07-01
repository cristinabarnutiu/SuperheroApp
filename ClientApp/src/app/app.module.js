"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var animations_1 = require("@angular/platform-browser/animations");
// RECOMMENDED
var dropdown_1 = require("ngx-bootstrap/dropdown");
var app_component_1 = require("./app.component");
var nav_menu_component_1 = require("./nav-menu/nav-menu.component");
var home_component_1 = require("./home/home.component");
var counter_component_1 = require("./counter/counter.component");
var fetch_data_component_1 = require("./fetch-data/fetch-data.component");
var auth_service_1 = require("./_services/auth.service");
var register_component_1 = require("./register/register.component");
var error_interceptor_1 = require("./_services/error.interceptor");
var superhero_list_component_1 = require("./superheroes/superhero-list/superhero-list.component");
var lists_component_1 = require("./lists/lists.component");
var auth_guard_1 = require("./_guards/auth.guard");
var reviews_component_1 = require("./reviews/reviews.component");
var user_list_component_1 = require("./users/user-list/user-list.component");
var superhero_card_component_1 = require("./superheroes/superhero-card/superhero-card.component");
var user_card_component_1 = require("./users/user-card/user-card.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_menu_component_1.NavMenuComponent,
                home_component_1.HomeComponent,
                counter_component_1.CounterComponent,
                fetch_data_component_1.FetchDataComponent,
                register_component_1.RegisterComponent,
                superhero_list_component_1.SuperheroListComponent,
                lists_component_1.ListsComponent,
                reviews_component_1.ReviewsComponent,
                user_list_component_1.UserListComponent,
                superhero_card_component_1.SuperheroCardComponent,
                user_card_component_1.UserCardComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
                http_1.HttpClientModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                dropdown_1.BsDropdownModule.forRoot(),
                router_1.RouterModule.forRoot([
                    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' },
                    { path: 'home', component: home_component_1.HomeComponent },
                    {
                        path: '',
                        runGuardsAndResolvers: 'always',
                        canActivate: [auth_guard_1.AuthGuard],
                        children: [
                            { path: 'superhero-list', component: superhero_list_component_1.SuperheroListComponent },
                            { path: 'user-list', component: user_list_component_1.UserListComponent },
                            { path: 'reviews', component: reviews_component_1.ReviewsComponent },
                            { path: 'lists', component: lists_component_1.ListsComponent },
                        ]
                    },
                    //in case the route is not found, then user will be redirected to home
                    { path: '**', redirectTo: '', pathMatch: 'full' },
                    //{ path: 'counter', component: CounterComponent },
                    //{ path: 'fetch-data', component: FetchDataComponent },
                    //{ path: 'value', component: ValueComponent },
                    { path: 'register', component: register_component_1.RegisterComponent },
                ]),
            ],
            providers: [
                auth_service_1.AuthService,
                error_interceptor_1.ErrorInterceptorProvider,
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map