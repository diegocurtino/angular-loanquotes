import { Component } from '@angular/core';

@Component({
  selector: 'lenders',
  templateUrl: './lenders.component.html',
  styleUrls: ['./lenders.component.css']
})

// class Lender {
//   name : string | undefined;
//   rate : number | undefined;
//   availableFunds : number | undefined;
// }

export class LendersComponent {
lendersX : Array<any> = new Array();
lenders = [
  {
    'name' : 'Bob',
    'rate' : 0.075,
    'availableFunds' : 650
  },
  {
    'name' : 'Jane',
    'rate' : 0.069,
    'availableFunds' : 480
  }
]
  
   constructor() {
//     // this.lender.name = "Bob";
//     // this.lender.rate = 0.075;
//     // this.lender.availableFunds = 650;
    
//     // this.lenders = [
//     //   this.lender
//     // ]
   }
}

// Bob   ,0.075,640
// Jane  ,0.069,480
// Fred  ,0.071,520
// Mary  ,0.104,170
// John  ,0.081,320
// Dave  ,0.074,140
// Angela,0.071,60
