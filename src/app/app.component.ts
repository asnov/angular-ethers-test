import { Component } from '@angular/core';

// this gives Uncaught Error: Cannot find module 'tslib'
import { ethers } from 'ethers';

// this works nicely:
// import { ethers } from 'ethers2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ethers-test';

  constructor() {
    const bn: ethers.utils.BigNumber = ethers.utils.bigNumberify(1);
    console.log(`BigNumber=`, bn);
  }

}
