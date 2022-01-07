import { Component, OnInit } from '@angular/core';
import { ApiService } from '../config/api.service';
import { CovidData } from '../interface/covid-data';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  API_DATA : any;
  stateList : string[] = [];
  finalStateData:any = {stateName:'',district:[],stateActive:0,stateConfirmed:0,stateDeceased:0,statRecovered:0};

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    console.log("inside ngonInit");
    this.onGetApiData();


  }
  
  onGetApiData(): void {
    console.log("2")
    this.ApiService.getData()
    .subscribe(
      (res:any) => {
        console.log(res)
        
        for (const property in res) {
          if (property != 'State Unassigned'){ this.stateList.push(property);} 
        }

        this.API_DATA = res;
        console.table(this.API_DATA)
        
      
      },
      (error: any) => console.log(error),
      () => console.log("covid data FETCHED successfully")
    )

    


    }
  

   
    handleStateClick(state:any): void{
      
      let stateData = this.API_DATA[state]
      let distNameList: String[] = [];

      this.finalStateData['stateName'] = state;
      distNameList = Object.keys(stateData['districtData']);
    //  let distNameList  = arr.filter(item => !['Unknown'].includes(item))
      

      distNameList.forEach((itm:any,i) => {

        let tempDistData = stateData['districtData'][itm];
        this.finalStateData.stateActive +=  tempDistData?.active;
        this.finalStateData.stateConfirmed +=  tempDistData?.confirmed;
        this.finalStateData.stateDeceased +=  tempDistData?.deceased;
        this.finalStateData.statRecovered +=  tempDistData?.recovered;

        this.finalStateData.district.push({
          distName:itm,
          active: tempDistData?.active,
          confirmed: tempDistData?.confirmed,
          deceased: tempDistData?.deceased,
          recovered: tempDistData?.recovered
        })
      })


      console.log(this.finalStateData);

      localStorage.setItem ('stateData', JSON.stringify(this.finalStateData));
      let data = JSON.parse(localStorage.getItem('stateData') || '{}');

      console.log(data);

      // let newDistData = {...this.API_DATA[state]}
      // let getStateData = Object.has
      // console.log(stateData);
      
      // console.log(state)
    }


  
}
