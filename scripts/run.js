const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by:", owner.address);

    let waveCount;
    // waveCount = await waveContract.getTotalWaves();
    waveCount = await waveContract.getWavesForSender(waveContract.address);
    // console.log("Wave Count : %d", waveCount)
    console.log("Wave Count : %d, Sender : %d", waveCount, waveContract.address)

    let waveTxn = await waveContract.wave();
    await waveTxn.wait();

    // waveCount = await waveContract.getTotalWaves();
    waveCount = await waveContract.getWavesForSender(waveContract.address);
    console.log("Wave Count After Wave: %d, Sender : %d", waveCount, waveContract.address)

    waveTxn = await waveContract.connect(randomPerson).wave();
    await waveTxn.wait();

    // waveCount = await waveContract.getTotalWaves();
    waveCount = await waveContract.getWavesForSender(randomPerson.address);
    console.log("Wave Count After Wave: %d, Sender : %d", waveCount, randomPerson.address)
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();