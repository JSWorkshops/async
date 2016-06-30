/*jshint mocha: true, node: true */
"use strict";
const chai = require('chai');
// https://github.com/domenic/chai-as-promised
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();

describe("static Promise.all()", () => {
  it("allows us to await for a group of promises to resolve", () => {
    var promise1 = new Promise((resolve)=>{
      setTimeout( ()=> resolve("promise 1"), 100);
    });
    var promise2 = new Promise((resolve)=>{
      setTimeout( ()=> resolve("promise 2"), 200);
    });
    var promise3 = new Promise((resolve)=>{
      setTimeout( ()=> resolve("promise 3"), 300);
    });
    var promises = [promise1, promise2, promise3];
    var result = ["promise 1", "promise 2", "promise 3"];
    return Promise.all(promises).should.eventually.eql(result);
  });
});
