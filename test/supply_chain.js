var SupplyChain = artifacts.require('./SupplyChain.sol');

contract('SupplyChain', async accounts => {
  it("should create a Participant", async () => {
    let instance = await SupplyChain.deployed();
    let participantId = await instance.addParticipant("A","passA","0xAF79392da8Bbb6bF75bA61536792c48Ce3d6570a","Manufacturer");
    let participant = await instance.participants(0);
    assert.equal(participant[0], "A");
    assert.equal(participant[2], "Manufacturer");

    participantId = await instance.addParticipant("B","passB","0x37F58762FF40e699BfcE6156368f186253966e11","Supplier");
    participant = await instance.participants(1);
    assert.equal(participant[0], "B");
    assert.equal(participant[2], "Supplier");

    participantId = await instance.addParticipant("C","passC","0x64BbC10dEA25b445c13601f3451893DccaeaD555","Consumer");
    participant = await instance.participants(2);
    assert.equal(participant[0], "C");
    assert.equal(participant[2], "Consumer");
  });

  it("should return Participant details", async () => {
    let instance = await SupplyChain.deployed();
    let participantDetails = await instance.getParticipant(0);
    assert.equal(participantDetails[0], "A");

    instance = await SupplyChain.deployed();
    participantDetails = await instance.getParticipant(1);
    assert.equal(participantDetails[0], "B");

    instance = await SupplyChain.deployed();
    participantDetails = await instance.getParticipant(2);
    assert.equal(participantDetails[0], "C");
  })
});
