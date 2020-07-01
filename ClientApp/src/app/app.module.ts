import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// RECOMMENDED
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


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
import { UserCardComponent } from './users/user-card/user-card.component';

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
    UserCardComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,

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
          { path: 'superhero-list', component: SuperheroListComponent },
          { path: 'user-list', component: UserListComponent },
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
