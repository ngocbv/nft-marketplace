// contracts/NFT.sol
// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721URIStorageUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

import "hardhat/console.sol";

contract NFT is ERC721URIStorageUpgradeable {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;
  address contractAddress;

  function initialize(address marketplaceAddress) public initializer {
    __ERC721_init("Metaverse Tokens", "METT");
    contractAddress = marketplaceAddress;
  }

  function setCounterTo100() public {
    _tokenIds.reset();
    for (uint256 i = 0; i < 100; i++) {
      _tokenIds.increment();
    }
  }

  function createToken(string memory tokenURI) public returns (uint) {
    _tokenIds.increment();
    uint256 newItemId = _tokenIds.current();

    _mint(msg.sender, newItemId);
    _setTokenURI(newItemId, tokenURI);
    setApprovalForAll(contractAddress, true);
    return newItemId;
  }
}
