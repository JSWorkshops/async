/*jshint mocha: true, node: true */
"use strict";
const chai = require('chai');
// https://github.com/domenic/chai-as-promised
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
const expect = require('chai').expect;

function doAsyncThingA(value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), 200);
  });
}

function doAsyncThingB(value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), 100);
  });
}

describe(".then() method", () => {
  it("allows to handle fulfilled promises", () => {
    const promise = new Promise((resolve) => {
      resolve("fail");
    });
    return promise
      .then(
        value => expect(value).to.equal("pass")
      )
  });

  it("allows to handle rejected promises", () => {
    const promise = new Promise((resolve, reject) => {
      reject(new Error("foo!"));
    });
    return promise
      .catch(
        error => expect(error.message).to.equal("Rejected!")
      );
  });

  it("allows us to chain actions", () => {
    return Promise.resolve(doAsyncThingA("fail"))
      .then(doAsyncThingB)
      .should.eventually.become("pass");
  });

  it("allows us to chain between promise and non-promise functions (monad)", () => {
    const promise = Promise.resolve("fail");
    return promise
      .then(doAsyncThingA)
      .then(value => value)
      .then(doAsyncThingB)
      .should.eventually.become("pass");
  });
});
