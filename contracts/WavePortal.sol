pragma solidity ^0.8.0;
// SPDX-License-Identifier: UNLICENSED

import "hardhat/console.sol";

contract WavePortal {
    uint256 private numOfWaves;

    constructor() {
        console.log("Smart Contract Created");
    }

    function getTotalWaves() public view returns(uint256){
        console.log("We have total waves!", numOfWaves);
        return numOfWaves;

    }

    function wave() public {
        numOfWaves++;
        console.log("%s has waved!", msg.sender);    }


}
