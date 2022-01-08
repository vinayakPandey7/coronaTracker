import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  // public options: any = {
  //   chart: {
  //     type: 'bar',
  //     height: 700
  //   },
  //   legend: {
  //     // layout: 'vertical',
  //     // align: 'right',
  //     // verticalAlign: 'middle' 
  //   },
  //   title: {
  //     text: 'Covid Cases'
  //   },
  //   credits: {
  //     enabled: false
  //   },
  //   plotOptions: {
  //     bar: {
  //       grouping: false,
  //     }
  //   },

  //   xAxis: {
  //     type: 'category'

  //   },
  //   series:  [{
  //     name: 'Confirmed',
  //     color: 'blue',
  //     data: [{name: 'Confirmed', y: 24916, x: 0}]
  //   }, {
  //     name: 'Active',
  //     color: 'yellow',
  //     data: [{name: 'Active', y: 11816, x: 1}]
  //   }, {
  //     name: 'Recovered',
  //     color: 'green', 
  //     data: [{name: 'Recovered', y: 34400, x: 2}]
  //   }, {
  //     name: 'Death',
  //     color: 'red', 
  //     data: [{name: 'Death', y: 12908, x: 3}]
  //   }]
  // }
  constructor() { }

  getOption(chartType:string,dataVal:any) {
    if( chartType != 'pie'){
      

   let options =   {
        chart: {
          type: chartType,
          height: 700
        },
        legend: {
          // layout: 'vertical',
          // align: 'right',
          // verticalAlign: 'middle' 
        },
        title: {
          text: 'Covid Cases'
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          bar: {
            grouping: false,
          }
        },
    
        xAxis: {
          type: 'category'
    
        },
        series:  [{
          name: 'Confirmed',
          color: 'blue',
          data: [{name: 'Confirmed', y: dataVal[0] , x: 0}]
        }, {
          name: 'Active',
          color: 'yellow',
          data: [{name: 'Active', y: dataVal[1], x: 1}]
        }, {
          name: 'Recovered',
          color: 'green', 
          data: [{name: 'Recovered', y:dataVal[2], x: 2}]
        }, {
          name: 'Death',
          color: 'red', 
          data: [{name: 'Death', y: dataVal[3], x: 3}]
        }]
      }



      return options;

    } else {



      let options = {
        chart: {
          type: 'pie',
          height: 700
        },
        legend: {
          // layout: 'vertical',
          // align: 'right',
          // verticalAlign: 'middle' 
        },
        title: {
          text: 'Covid Cases'
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
        },
    
        xAxis: {
          type: 'category'
    
        },
        series:  [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
              name: 'Confirm',
              y:  dataVal[0],
              sliced: true,
              selected: true
          }, {
              name: 'Active',
              y:  dataVal[1]
          }, {
              name: 'Recovered',
              y:dataVal[2]
          }, {
              name: 'Death',
              y: dataVal[3]
          }]
      }]
      }

   
      return options
  }

}
}