const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("WavePortal", function () {
    it("Should return new wave once Once there is a new reaction", async function () {
        const Greeter = await ethers.getContractFactory("WavePortal");
        const greeter = await Greeter.deploy();
        await greeter.deployed();

    });
});
