// modules
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSelectModule } from "@angular/material/select";
import { HighchartsChartModule } from "highcharts-angular";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatListModule } from "@angular/material/list";
import { FormsModule } from "@angular/forms";

// components
import { AppComponent } from "./app.component";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { StatePageComponent } from "./components/state-page/state-page.component";
import { DistrictPageComponent } from "./components/district-page/district-page.component";
import { CardsComponent } from "./components/cards/cards.component";
import { LoaderComponent } from "./components/loader/loader.component";

// Services
import { ApiService } from "./services/api.service";
import { ChartService } from "./services/chart-service";

import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    StatePageComponent,
    DistrictPageComponent,
    CardsComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatSelectModule,
    HighchartsChartModule,
    MatCardModule,
    MatTableModule,
    MatListModule,
    FormsModule,
    MatProgressSpinnerModule,
  ],
  providers: [ApiService, ChartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
