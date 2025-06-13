const ERC20Token = artifacts.require("ERC20Token");

contract("ERC20Token", function(accounts) {
  it("should assert true", async () => {
    const erc20token = await ERC20Token.deployed();
    assert.isTrue(true); // Replace this with a real test soon
  });
});
