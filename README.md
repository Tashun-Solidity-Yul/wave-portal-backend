# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

#External packages 
```
external packages 

npm install hardhat
npm install @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers

```


```shell

npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
#Local deploy the contract
```angular2html
<!--start the node with 20 accounts-->
npx hardhat node
<!--Deploy the contract-->
npx hardhat run scripts/deploy.js --network localhost
<!--Rinkyby deploy-->
npx hardhat run scripts/deploy.js --network rinkeby
```

```angular2html
λ npx hardhat run scripts/deploy.js --network rinkeby
Compiling 2 files with 0.8.4
Compilation finished successfully
Deploying contracts with account:  0x752e4c6Cf51Cf1e4752E47B18794146586FEE09d
Account balance:  35000000000000000
WavePortal address:  0xF70c31a51321F292525dF8D43B431Eb90296A4Cf
```