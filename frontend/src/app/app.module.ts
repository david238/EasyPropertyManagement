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

const routes = [
  { path: '', component: TabsComponent},
  { path: 'new-property', component: CreatePropertyComponent},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    CreatePropertyComponent,
    CreateUnitsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ApiClientModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
