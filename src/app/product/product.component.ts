import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  price = 200;
  constructor() { }
  count = 0;
  count1 = 0;
  a:any;
  ngOnInit(): void {
  }
  onAdd(){
    this.count++;
  }

  onSub(){
    this.count=1;
    this.count--;
  }
  sum(){
     this.a=this.count * this.price;
    return this.a;
}}
