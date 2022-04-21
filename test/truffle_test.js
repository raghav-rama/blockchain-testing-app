//const truffle_test = artifacts.require("truffle_test");
//
///*
// * uncomment accounts to access the test accounts made available by the
// * Ethereum client
// * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
// */
//contract("truffle_test", function (/* accounts */) {
//  it("should assert true", async function () {
//    await truffle_test.deployed();
//    return assert.isTrue(true);
//  });
//});

const HelloWorld = artifacts.require("HelloWorld") ;

contract("HelloWorld" , () => {
    it("Hello World Testing" , async () => {
       const helloWorld = await HelloWorld.deployed() ;
       await helloWorld.setName("User Name") ;
       const result = await helloWorld.yourName() ;
       assert(result === "User Name") ;
    });
});