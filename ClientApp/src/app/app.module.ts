import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// RECOMMENDED
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AuthService } from './_services/auth.service';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { SuperheroListComponent } from './superheroes/superhero-list/superhero-list.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { ReviewsComponent } from './reviews/reviews.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { SuperheroCardComponent } from './superheroes/superhero-card/superhero-card.component';
import { JwtModule } from '@auth0/angular-jwt';
import { SuperheroDetailComponent } from './superheroes/superhero-detail/superhero-detail.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SuperheroDetailResolver } from './_resolvers/superhero-detail.resolver';
import { SuperheroListResolver } from './_resolvers/superhero-list.resolver';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserListResolver } from './_resolvers/user-list.resolver';
import { UserDetailResolver } from './_resolvers/user-detail.resolver';
import { UserCardComponent } from './users/user-card/user-card.component';
import { UserEditResolver } from './_resolvers/user-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes-guard';
import { AboutComponent } from './about/about.component';

export function tokenGetter() { return localStorage.getItem('token');}

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    RegisterComponent,
    SuperheroListComponent,
    ListsComponent,
    ReviewsComponent,
    UserListComponent,
    SuperheroCardComponent,
    SuperheroDetailComponent,
    UserDetailComponent,
    UserEditComponent,
    UserCardComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['localhost:5000/api/auth']
      }
    }),

    TabsModule.forRoot(),

    NgxGalleryModule,

    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),

    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent },

      {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
          { path: 'superhero-list', component: SuperheroListComponent, resolve: { superheroes: SuperheroListResolver } },
          { path: 'superhero-list/:id', component: SuperheroDetailComponent, resolve: { superhero: SuperheroDetailResolver } },
          { path: 'user-list', component: UserListComponent, resolve: { users: UserListResolver } },
          { path: 'user-list/:id', component: UserDetailComponent, resolve: { user: UserDetailResolver } },
          {
            path: 'user/edit',
            component: UserEditComponent,
            resolve: { user: UserEditResolver },
            canDeactivate: [PreventUnsavedChanges]
          },
          { path: 'about', component: AboutComponent },
          { path: 'reviews', component: ReviewsComponent },
          { path: 'lists', component: ListsComponent },]
      },


      //in case the route is not found, then user will be redirected to home
      { path: '**', redirectTo: '', pathMatch: 'full'},

      //{ path: 'counter', component: CounterComponent },
      //{ path: 'fetch-data', component: FetchDataComponent },

      //{ path: 'value', component: ValueComponent },
      { path: 'register', component: RegisterComponent },
    ]),

  ],

  providers: [
    AuthService,
    ErrorInterceptorProvider,
    SuperheroDetailResolver,
    SuperheroListResolver,
    UserListResolver,
    UserDetailResolver,
    UserEditResolver,
    PreventUnsavedChanges,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
