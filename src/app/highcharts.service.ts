
import * as Highcharts from 'highcharts';
import { Injectable } from '@angular/core';

@Injectable()
export class HighchartsService {
    constructor() {
    }
    
    createChart(el:any, cfg:any) {
      Highcharts.chart(el, cfg);
    }
}