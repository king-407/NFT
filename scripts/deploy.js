const {ethers}=require("hardhat")
async function main(){
  const contract=await ethers.getContractFactory("NFTee");//an instance of contract is created//
  
  const deployedContract=await contract.deploy();  
  await deployedContract.deployed();
  console.log("NFT contract deployed to:",deployedContract.address);
}
main().then(()=>process.exit(0)).catch((error)=>{
    console.log(error);
    process.exit(1);
})