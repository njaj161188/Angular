import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

user:any;
@Input('user') usergrp : User;
@Input('numtra') trade: string;

isCollapsed : Boolean = true;

  constructor() {
    }
   
toggleCollapsed() {
  this.isCollapsed = !this.isCollapsed;
}    

  ngOnInit() {
    this.user= {
      name:this.usergrp.name,
      title:this.usergrp.title,
      address:this.usergrp.address,
      phone:this.usergrp.phone };
  }
}
