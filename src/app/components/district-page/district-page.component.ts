import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
var Highcharts = require('highcharts');
import { ChartService } from "../../services/chart-service";
import { chartTypes } from "src/app/interface/chart-types";
import {chartOptions} from "src/app/interface/chart-options";
import {RegionData} from "src/app/interface/region-data";



@Component({
  selector: "app-district-page",
  templateUrl: "./district-page.component.html",
  styleUrls: ["./district-page.component.css"],
})

export class DistrictPageComponent implements OnInit {
  distData: RegionData = {
    distName: "",
    active: 0,
    confirmed: 0,
    deceased: 0,
    recovered: 0
  }
  plotData: number[]=[];
  options: chartOptions | undefined;
  chartTypes: chartTypes[] = [
    { value: "bar", viewValue: "Bar" },
    { value: "column", viewValue: "Column" },
    { value: "line", viewValue: "Line" },
    { value: "pie", viewValue: "Pie Chart" },
  ];

  distkeyfact = [
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
      color: "rgb(168,194,94)",
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
  selectedValue: any;
  distChart: any;
  constructor(private route: Router, private ChartService: ChartService) {}

  ngOnInit(): void {
    this.selectedValue = this.chartTypes[0].value;
    if (localStorage.getItem("distData") != null) {
      this.distData = JSON.parse(localStorage.getItem("distData") || "{}");
      console.log(this.distData)
      let confirm = this.distData["confirmed"],
        active = this.distData["active"],
        recovered = this.distData["recovered"],
        deaths = this.distData["deceased"];

      this.plotData = [confirm, active, recovered, deaths];
      console.log(this.plotData)
      this.distkeyfact.forEach((itm) => {
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
      this.options = this.ChartService.getOption("bar", this.plotData);
      this.makeChart(this.options);
    } else {
      this.route.navigate(["/state"]);
    }
  }

  makeChart(options: chartOptions) {
    console.log(options)
    this.distChart= Highcharts.chart("containerDist", options);
  }

  changeChart(chartType: string) {
    this.options = this.ChartService.getOption(chartType, this.plotData);
    Highcharts.chart("containerDist", this.options);
  }

  // destroy the chart when new component loads
  ngOnDestroy(): void {
    this.distChart.destroy();
  }
}
