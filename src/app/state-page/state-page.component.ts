import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import * as Highcharts from "highcharts";
import { ChartService } from "../chart-service";

interface Food {
  value: string;
  viewValue: string;
}

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
  stateData: any;
  foods: Food[] = [
    { value: "column", viewValue: "Column" },
    { value: "bar", viewValue: "Bar" },
    { value: "line", viewValue: "Line" },
    { value: "pie", viewValue: "Pie Chart" },
  ];

  covidchart: any;
  options: any;
  chartData: number[] = [];
  selectedValue: any;
  isLoading: boolean = true;

  constructor(private route: Router, private ChartService: ChartService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.selectedValue = this.foods[0].value;
    if (localStorage.getItem("stateData") != null) {
      this.stateData = JSON.parse(localStorage.getItem("stateData") || "{}");

      let confirm = this.stateData.stateStatus["stateConfirmed"],
        active = this.stateData.stateStatus["stateActive"],
        recovered = this.stateData.stateStatus["statRecovered"],
        deaths = this.stateData.stateStatus["stateDeceased"];
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

      //  get chart options data
      this.options = this.ChartService.getOption("column", this.chartData);

      this.drawChart(this.options);
      Highcharts.chart("container", this.options);
      
    } else {
      this.route.navigate(["/"]);
    }
  }

  drawChart(options: any): void {
    Highcharts.chart("container", this.options);
    this.isLoading = false;
  }

  changeChart(chartType: any) {
    this.options = this.ChartService.getOption(chartType, this.chartData);
    this.drawChart(this.options);
  }

  handleDistClick(distData: any): void {
    localStorage.setItem("distData", JSON.stringify(distData));
  }
}
