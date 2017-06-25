import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { ContentComponent } from './content/content.component';
import { MaincarouselComponent } from './maincarousel/maincarousel.component';
import { FooterComponent } from './footer/footer.component';
import { PricesComponent } from './prices/prices.component';
import { PriceComponent } from './price/price.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { ScheduleComponent } from './schedule/schedule.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { AboutComponent } from './about/about.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { TitleBarComponent } from './title-bar/title-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ContentComponent,
    MaincarouselComponent,
    FooterComponent,
    PricesComponent,
    PriceComponent,
    ScheduleComponent,
    PageContainerComponent,
    AboutComponent,
    FrontPageComponent,
    TitleBarComponent
  ],
  imports: [ BrowserModule , AppRoutingModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
