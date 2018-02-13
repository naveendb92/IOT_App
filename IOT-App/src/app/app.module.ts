import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as highmaps from 'highcharts/modules/map.src';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';


import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonutChartComponent } from './shared/donut-chart/donut-chart.component';
import { HorizontalBarChartComponent } from './shared/horizontal-bar-chart/horizontal-bar-chart.component';
import { HighmapComponent } from './shared/highmap/highmap.component';

export function highchartsModules() {
  return [highmaps, more, exporting ];
}

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    DashboardComponent,
    DonutChartComponent,
    HorizontalBarChartComponent,
    HighmapComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ChartModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: highchartsModules } // add as factory to your providers
  ]
})
export class AppModule { }
