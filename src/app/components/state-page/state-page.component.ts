import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ChartService } from "../../services/chart-service";
var Highcharts = require('highcharts');
import { chartTypes } from "src/app/interface/chart-types";
import { chartOptions } from "src/app/interface/chart-options";
import { RegionData } from "src/app/interface/region-data";

@Component({
  selector: "app-state-page",
  templateUrl: "./state-page.component.html",
  styleUrls: ["./state-page.component.css"],
})
export class StatePageComponent implements OnInit {
  title = "myHighchart";
  statekeyfact = [
    {
      name: "totalConfirmed",
      label: "Total",
      color: "#8076a3",
      image: "",
      png: "../assets/images/coronacase.png",
      value: 0,
      source: "",
    },
    {
      name: "activeCases",
      label: "Active",
      color: "#FFBF00",
      image: "",
      png: "../assets/images/mask.svg",
      value: 0,
      source: "",
    },
    {
      name: "discharged",
      label: "Cured",
      color: "#98ff98",
      image: "",
      png: "../assets/images/cured.png",
      value: 0,
      source: "",
    },
    {
      name: "deaths",
      label: "Casualties",
      color: "#ff7f8a",
      image: "",
      png: "../assets/images/death.svg",
      value: 0,
      source: "",
    },
  ];

  stateData: RegionData | any;
  
  chartTypes: chartTypes[] = [
    { value: "column", viewValue: "Column" },
    { value: "bar", viewValue: "Bar" },
    { value: "line", viewValue: "Line" },
    { value: "pie", viewValue: "Pie Chart" },
  ];

  options: chartOptions | undefined;
  chartData: number[] = [];
  selectedValue: string = 'Column';
  isLoading: boolean = true;
  stateChart: any;
  constructor(private route: Router, private ChartService: ChartService) {}

  ngOnInit(): void {
    // enable loader
    this.isLoading = true;
    this.selectedValue = this.chartTypes[0].value;
    
    // get initial value of state data if availble 
    if (localStorage.getItem("stateData") != undefined) {
      this.stateData = JSON.parse(localStorage.getItem("stateData") || "{}");
      let confirm = this.stateData?.stateStatus["stateConfirmed"],
        active = this.stateData?.stateStatus["stateActive"],
        recovered = this.stateData?.stateStatus["statRecovered"],
        deaths = this.stateData?.stateStatus["stateDeceased"];
        
      this.chartData = [confirm, active, recovered, deaths];
      this.statekeyfact.forEach((itm) => {
        switch (itm.name) {
          case "totalConfirmed":
            itm.value = confirm;
            break;
          case "activeCases":
            itm.value = active;
            break;
          case "discharged":
            itm.value = recovered;
            break;
          case "deaths":
            itm.value = deaths;
            break;

          default:
            break;
        }
      });

      //  get chart options data from service
      this.options = this.ChartService.getOption("column", this.chartData);

      // draw the initial chart when component loads first time
      this.drawChart(this.options);
    } else {
      this.route.navigate(["/"]);
    }
  }


  drawChart(options: chartOptions): void {
    this.stateChart = Highcharts.chart("container", this.options);
    this.isLoading = false;
  }

  // handle change chart event
  changeChart(chartType: any): void {
    this.options = this.ChartService.getOption(chartType, this.chartData);
    this.drawChart(this.options);
  }

  handleDistClick(distData: any): void {
    localStorage.setItem("distData", JSON.stringify(distData));
  }

   // destroy the chart when new component loads
  ngOnDestroy(): void {
    this.stateChart.destroy();
  }
}
