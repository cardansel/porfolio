import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteComponent } from './components/component/componente.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { StudieComponent } from './components/studie/studie.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    BannerComponent,
    AboutComponent,
    StudieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
