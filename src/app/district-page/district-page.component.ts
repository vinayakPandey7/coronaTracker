import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as Highcharts from 'highcharts';
import {ChartService} from '../chart-service'
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-district-page',
  templateUrl: './district-page.component.html',
  styleUrls: ['./district-page.component.css']
})
export class DistrictPageComponent implements OnInit {
  distData : any;
  plotData: any;
  options: any;
  foods: Food[] = [
    {value: 'bar', viewValue: 'Bar'},
    {value: 'column', viewValue: 'Column'},
    {value: 'line', viewValue: 'Line'},
    {value: 'pie', viewValue: 'Pie Chart'},
  ];

  distkeyfact = [
    {
      name: 'totalConfirmed',
      label: 'Total',
      color: '#8076a3',
      image: '',
      png: '../assets/images/coronacase.png',
      value: 0,
      source: ''
    },
    {
      name: 'activeCases',
      label: 'Active',
      color: '#FFBF00',
      image: '',
      png: '../assets/images/mask.svg',
      value: 0,
      source: ''
    },
    {
      name: 'discharged',
      label: 'Cured',
      color: 'rgb(168,194,94)',
      image: '',
      png: '../assets/images/cured.png',
      value: 0,
      source: ''
    },
     {
      name: 'deaths',
      label: 'Casualties',
      color: '#ff7f8a',
      image: '',
      png: '../assets/images/death.svg',
      value: 0,
      source: ''
    }
  ]
  constructor(private route:Router, private ChartService : ChartService) { }

  ngOnInit(): void {

    if(localStorage.getItem("distData") != null){
      this.distData = JSON.parse(localStorage.getItem('distData') || '{}');
      

      let confirm = this.distData['confirmed'],
      active = this.distData['active'],
      recovered = this.distData['recovered'],
      deaths = this.distData['deceased']

      this.plotData = [confirm, active, recovered, deaths,]
      this.distkeyfact.forEach(itm=>{
        
        switch (itm.name) {
            case 'totalConfirmed':itm.value =confirm
            break;
            case 'activeCases':itm.value =active
            break;
            case 'discharged':itm.value =recovered
            break;
            case 'deaths':itm.value =deaths
            break;
        
          default:
            break;
        }
       })
      this.options = this.ChartService.getOption('bar',this.plotData);
      this.makeChart(this.options);
    } else {
      this.route.navigate(['/state']);
    }

  }

  makeChart(options:any) {
    Highcharts.chart('containerDist', options);
  }

  changeChart(chartType:any){
   
    this.options.chart.type = chartType;
   
    this.options =  this.ChartService.getOption(chartType,this.plotData);
    Highcharts.chart('containerDist', this.options);
  }


}
