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
  finalStateData:any = {stateName:'',district:[],stateStatus:{stateActive:0,stateConfirmed:0,stateDeceased:0,statRecovered:0}};
  bannerImage= '../../assets/images/covidHeader.png';
  isLoading:boolean = true;
  constructor(private ApiService: ApiService) { }
  
  ngOnInit(): void {
   
    this.onGetApiData();


  }
  
  onGetApiData(): void {
    
    this.ApiService.getData()
    .subscribe(
      (res:any) => {
        for (const property in res) {
          if (property != 'State Unassigned'){ this.stateList.push(property);} 
        }
        this.API_DATA = res;
        
        
      },
      (error: any) => console.log(error),
      () => this.isLoading =false
    )

    


    }
  

   
    handleStateClick(state:any): void{
      let stateData = this.API_DATA[state]
      let distNameList: String[] = [];
      this.finalStateData['stateName'] = state;
      distNameList = Object.keys(stateData['districtData']);

      distNameList.forEach((itm:any,i) => {

        let tempDistData = stateData['districtData'][itm];
        this.finalStateData['stateStatus'].stateActive +=  tempDistData?.active;
        this.finalStateData['stateStatus'].stateConfirmed +=  tempDistData?.confirmed;
        this.finalStateData['stateStatus'].stateDeceased +=  tempDistData?.deceased;
        this.finalStateData['stateStatus'].statRecovered +=  tempDistData?.recovered;

        this.finalStateData.district.push({
          distName:itm,
          active: tempDistData?.active,
          confirmed: tempDistData?.confirmed,
          deceased: tempDistData?.deceased,
          recovered: tempDistData?.recovered
        })
      })


     

      localStorage.setItem ('stateData', JSON.stringify(this.finalStateData));
    }


  
}
