//SPDX-Licence-Identifier:MIT
pragma solidity ^0.8.4;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
contract NFTee is ERC721{
constructor()ERC721("learnNFT","LNFT"){
_mint(msg.sender,1);
}
}