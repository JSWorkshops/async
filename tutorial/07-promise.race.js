/*jshint mocha: true, node: true */
"use strict";
const chai = require('chai');
// https://github.com/domenic/chai-as-promised
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();

describe("static Promise.race()", () => {
  it("allows us to 'race' promises against each other", () => {
    var promise1 = new Promise((resolve)=>{
      setTimeout( ()=> resolve("promise 1"), 300);
    });
    var promise2 = new Promise((resolve)=>{
      setTimeout( ()=> resolve("promise 2"), 100);
    });
    return Promise.race([promise1, promise2]).should.eventually.become("promise 1");
  });
});


