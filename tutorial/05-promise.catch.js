/*jshint mocha: true, node: true */
"use strict";
const chai = require('chai');
// https://github.com/domenic/chai-as-promised
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();

describe(".catch() method", () => {

  it("allows us to catch expected errors", () => {
    const error = new Error("This is a test error!");
    var promise = new Promise((resolve, reject) => {
      reject(reject);
    });
    return promise
      // catch here
      .then(() => Promise.resolve("recovered"))
      .should.eventually.become("recovered")
  });

  it("allows us to catch unforeseen errors", () => {
    const error = new Error("Unforeseen Error!");
    var promise = new Promise(() => {
      throw error;
    });
    return promise
      //.catch()
      .should.eventually.equal("fixed it");
  });

});
