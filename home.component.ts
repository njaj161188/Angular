import { Component, OnInit, Input } from '@angular/core';
import {GridOptions} from "ag-grid-community";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 finalNumtra:string="XYZ";
 

 constructor(){

 }

 ngOnInit() {
  }

  onCellClicked(numtra){
    this.finalNumtra=numtra;
  }

}
