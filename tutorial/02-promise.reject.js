/*jshint mocha: true, node: true */
"use strict";
const chai = require('chai');
// https://github.com/domenic/chai-as-promised
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();

describe("static Promise.reject()", () => {
  it("allows to create immediately rejected promises", () => {
    const error = new Error("pass");
    const promise = Promise.reject(error);
    return promise.should.be.rejectedWith(error);
  });
});

