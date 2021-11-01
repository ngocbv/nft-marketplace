// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers, upgrades } = require('hardhat');

async function main() {
  const NFTMarketV2 = await ethers.getContractFactory("NFTMarketV2");
  console.log('Upgrading NFTMarket...');
  await upgrades.upgradeProxy('0x895C0AAED623b774a8559B4Bf1b10D78ED085EEb', NFTMarketV2);
  console.log('NFTMarket upgraded');
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
