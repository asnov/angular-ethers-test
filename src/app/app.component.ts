import { Component } from '@angular/core';

// this gives Uncaught Error: Cannot find module 'tslib'
import { ethers } from 'ethers';
import { AsyncSendable, Web3Provider } from 'ethers/providers';

// this works nicely without a production build tslib error:
// import { ethers } from 'ethers2';

// This compiles but intellisence doesn't work
// import { LiquidLong, Provider, Scheduler, TimeoutScheduler, JsonRpcProvider } from '@keydonix/liquid-long-client-library';

// "source/index.ts is missing from the TypeScript compilation" error
// import { LiquidLong, Provider, Scheduler, TimeoutScheduler, JsonRpcProvider } from '@keydonix/liquid-long-client-library/source';

// This works fine but looks weird
import { LiquidLong, Provider, Scheduler, TimeoutScheduler, JsonRpcProvider } from '@keydonix/liquid-long-client-library/output';


declare const web3: {
  currentProvider: AsyncSendable;
};


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

    this.testLiquidLong();
  }

  async testLiquidLong() {
    const scheduler: Scheduler = new TimeoutScheduler();
    // const provider: Provider = new JsonRpcProvider('http://localhost:8545');
    const provider: Provider = new Web3Provider(web3.currentProvider);

    // const provider: JsonRpcProvider = new JsonRpcProvider('http://localhost:8545');
    // const provider: Web3Provider = new Web3Provider(web3.currentProvider);
    const liquidLongAddress = '0x80F8DAA435A9AB4B1802BA56FE7E0ABD0F8AB3D3';
    const defaultEthPriceInUsd = 225;
    const defaultProviderFeeRate = 0.21;
    const ll: LiquidLong = new LiquidLong(scheduler, provider, liquidLongAddress, defaultEthPriceInUsd, defaultProviderFeeRate);
    await ll.awaitReady;
  }

}
