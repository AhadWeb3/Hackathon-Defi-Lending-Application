import Web3 from "web3";

let web3;
// Destinguishes browser from server side
// if (window.ethereum) {
//   web3 = new Web3(window.ethereum);
//   try { 
//      window.ethereum.enable().then(function() {
//      });
//   } catch(e) {
//   }
// } else {
//   // we are in the server side and metmask is not available
//   const provider = new Web3.providers.HttpProvider(
//     "https://rinkeby.infura.io/v3/fe1c24d8eaba43c3835a7f2a1c8aec39"
//   );
//   web3 = new Web3(provider);
// }

// we are in the server side and metmask is not available
const provider = new Web3.providers.HttpProvider(
  "https://rinkeby.infura.io/v3/fe1c24d8eaba43c3835a7f2a1c8aec39"
);
web3 = new Web3(provider);



export default web3;