import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { StatePageComponent } from './state-page/state-page.component';
import { DistrictPageComponent } from './district-page/district-page.component';
import { ApiService } from './config/api.service';
import {MatSelectModule} from '@angular/material/select';
import { ChartService } from './chart-service';
import { ChartModule } from 'angular-highcharts';
import { CardsComponent } from './cards/cards.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    StatePageComponent,
    DistrictPageComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatSelectModule,
    ChartModule,
    MatCardModule,
    MatTableModule,
    MatListModule,
    FormsModule

  ],
  providers: [
    ApiService,
    ChartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
