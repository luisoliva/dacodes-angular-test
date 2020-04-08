import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LayoutContentComponent } from './layouts/layout-content/layout-content.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { PlayersPageComponent } from './pages/players-page/players-page.component';
import { VenadosCardComponent } from './components/shared/venados-card/venados-card.component';
import { MonthCardComponent } from './components/home/month-card/month-card.component';
import { GameContainerComponent } from './components/home/game-container/game-container.component';
import {VenadosGamesDataService} from './core/services/VenadosGamesData.service';
import {AddHeaderRequestInterceptor} from './core/AddHeaderRequestInterceptor';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    LayoutContentComponent,
    HomePageComponent,
    StatisticsPageComponent,
    PlayersPageComponent,
    VenadosCardComponent,
    MonthCardComponent,
    GameContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
      { provide: NZ_I18N, useValue: en_US },
      {provide: HTTP_INTERCEPTORS, useClass: AddHeaderRequestInterceptor, multi: true},
      VenadosGamesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
