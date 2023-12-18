import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeftNavigationComponent } from './Components/left-navigation/left-navigation.component';
import { TopNavigationComponent } from './Components/top-navigation/top-navigation.component';
import { CardDetailsComponent } from './Components/card-details/card-details.component';
import { MoneyStaticticsComponent } from './Components/money-statictics/money-statictics.component';
import { TransactionHistoryComponent } from './Components/transaction-history/transaction-history.component';
import { HttpClientModule } from '@angular/common/http';
import { FusionChartsModule } from "angular-fusioncharts";
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);


@NgModule({
  declarations: [
    AppComponent,
    LeftNavigationComponent,
    TopNavigationComponent,
    CardDetailsComponent,
    MoneyStaticticsComponent,
    TransactionHistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
