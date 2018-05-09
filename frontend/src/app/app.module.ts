import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PropertyService } from './api/client/properties/property.service';
import { RouterModule } from '@angular/router';

import { ApiClientModule } from './api/client/api-client.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { CreatePropertyComponent } from './create-property/create-property.component';
import { CreateUnitsComponent } from './create-units/create-units.component';
import { HeaderComponent } from './header/header.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { LogoutComponent } from './logout/logout.component';
import { AUTH_ROUTES } from './authentication/auth-routes';

const routes = [
  { path: '', redirectTo: '/authentication/signin', pathMatch: 'full'},
  { path: 'properties', component: TabsComponent},
  { path: 'new-property', component: CreatePropertyComponent},
  { path: 'authentication', component: AuthenticationComponent, children: AUTH_ROUTES},
  { path: '**', redirectTo: '/authentication'}
];

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    CreatePropertyComponent,
    CreateUnitsComponent,
    HeaderComponent,
    AuthenticationComponent,
    SignupComponent,
    SigninComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    ApiClientModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
