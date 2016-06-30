/*jshint mocha: true, node: true */
"use strict";
const chai = require('chai');
// https://github.com/domenic/chai-as-promised
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();

describe("static Promise.resolve()", () => {
  it("allows to create immediately resolved promises", () => {
    const promise;
    return promise.should.become("pass");
  });
});
