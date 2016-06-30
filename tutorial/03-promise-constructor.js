/*jshint mocha: true, node: true */
"use strict";
const chai = require('chai');
// https://github.com/domenic/chai-as-promised
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
const expect = require('chai').expect;

describe("Promise constructor", () => {

  it("allows us to create instances of promises", () => {
    const promise = new Promise(() => {});
    expect(promise).to.be.an.instanceof(Promise);
  });

  it("allows use to immediately resolve with a value", () => {
    const promise = new Promise((resolve) => {
      resolve("pass");
    });
    return promise.should.eventually.equal("pass");
  });

  it("allows use to immediately reject with an error", () => {
    const error = new Error("pass");
    const promise = new Promise((resolve, reject) => {
      reject(error);
    });
    return promise.should.be.rejectedWith(error);
  });

  it("allows use to resolve with a value in the future", () => {
    const promise = new Promise((resolve) => {
      setTimeout(() => resolve("pass"), 100);
    });
    return promise.should.eventually.equal("pass");
  });

  it("allows use to reject with an error in the future", () => {
    const error = new Error("pass");
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => reject(error), 100);
    });
    return promise.should.eventually.be.rejectedWith(error);
  });

});
