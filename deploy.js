const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const defi = require("./build/Defi.json");

const provider = new HDWalletProvider(
  "immune renew false candy leave grow wasp scan buffalo inside pepper camp",
  "https://rinkeby.infura.io/v3/fe1c24d8eaba43c3835a7f2a1c8aec39"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0])

  const result = await new web3.eth.Contract(
    JSON.parse(defi.abi)
  )
    .deploy({ data: defi.evm.bytecode })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
};

deploy();