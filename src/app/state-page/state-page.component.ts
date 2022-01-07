import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-state-page',
  templateUrl: './state-page.component.html',
  styleUrls: ['./state-page.component.css']
})
export class StatePageComponent implements OnInit {
  @Input() data:any;

  constructor() { 
    console.log(this.data) 
   }

  ngOnInit(): void {
    console.log("inside state component");
    console.log(this.data)
  }

}
