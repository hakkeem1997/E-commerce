import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  price =100;
  price1=200;
  price2=100;
  constructor() { }
  count = 0;
  count1 = 0;
  a:any;
  b:any;
  tot:any;

  ngOnInit(): void {
  }
  pros:any=[];
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
}
onAdd1(){
  this.count1++;
}

onSub1(){
  this.count1=1;
  this.count1--;
}
sum1(){
  this.b=this.count1 * this.price;
 return this.b;
}


ss(){
this. tot= this.a+this.b;
return this.tot;
  
}
}
