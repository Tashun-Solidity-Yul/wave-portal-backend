pragma solidity ^0.8.0;
// SPDX-License-Identifier: UNLICENSED

import "hardhat/console.sol";

contract WavePortal {
//    uint256 private numOfWaves;
    mapping (address => uint256) private waveMap;

    constructor() {
        console.log("Smart Contract Created");
    }

//    function getTotalWaves() public view returns(uint256){
//        console.log("We have total waves!", numOfWaves);
//        return numOfWaves;
//
//    }

    function getWavesForSender(address id) public view returns(uint256){
        console.log("user %s waved %s time", id ,waveMap[id]);
        return waveMap[id];

    }

    function wave() public {
//        numOfWaves++;
        waveMap[msg.sender] = ++waveMap[msg.sender];
//        console.log("%s has waved!", msg.sender);
        console.log("%s Waves From Map, saved for sender %s", waveMap[msg.sender], msg.sender);}


}
