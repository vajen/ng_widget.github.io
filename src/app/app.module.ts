import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';
import { UniqTypePipe } from './uniq-type.pipe';
import { MenuComponent } from './menu/menu.component';
import { HotelsFilterPipe } from './hotels-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    WeatherComponent,
    SocialComponent,
    UniqTypePipe,
    MenuComponent,
    HotelsFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
