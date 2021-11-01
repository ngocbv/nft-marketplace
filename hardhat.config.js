require("@nomiclabs/hardhat-waffle")
const fs = require('fs')
const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789"
// const privateKey = "9224e54140f44e46b94b129cfc93d0c2";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/21092983a396477ab01134ba57a4c4de",
      accounts: [privateKey]
    },
    mumbai: {
      url: "https://matic-testnet-archive-rpc.bwarelabs.com",
      // url: "https://rpc-mumbai.matic.today",
      // url: "https://polygon-mumbai.infura.io/v3/21092983a396477ab01134ba57a4c4de",
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
