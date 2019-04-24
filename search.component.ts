import { Component, OnInit, Output, Input } from '@angular/core';
import {GridOptions} from "ag-grid-community";
import { EventEmitter } from 'events';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() 
  inputSearch:string;
  public gridOptions: GridOptions;
  public collapseGrid:Boolean=true;
  public finalNumtra:string;
  //Below Output will be response of Data service for IFL 
  responseNumtrasforIflow : Array<any>=["TAUONE2334","SPBDUS8876","ENT445342","ITC4455242"];
  responseNumtra : string ="TAUONE333333";

  public columnDefs :GridOptions["columnDefs"]= [
    {
      headerName:"Numtra",
      field:"numtra",
      width:200,
      filter: true
    }
  ];



  public rowData :GridOptions["rowData"]= [
  ];

  constructor(){    
    this.gridOptions = <GridOptions>{
      context: {
          componentParent: this
      }
  };

}

  private onRowClicked(event:any) {
    this.finalNumtra=event.data.numtra;
    this.inputSearch=this.finalNumtra;
  }

  
  private onCellFocused(event:any) {
    console.log('onCellFocused: (' + event.rowIndex + ',' + event.colIndex + ')');
}


  search(){
    if (this.inputSearch.substring(0,3) == "IFL") {
      this.collapseGrid = false;
      
       this.responseNumtrasforIflow.forEach(i=>{
         console.log(i);
          this.rowData.push(
           {
            numtra:i
           });
        });  
      this.gridOptions.rowData = this.rowData;
      this.gridOptions.columnDefs = this.columnDefs;
    } else {
      this.collapseGrid = true;
      this.finalNumtra=this.responseNumtra;
    }
    console.log(this.collapseGrid);
  }
      
ngOnInit() {
  }

}
