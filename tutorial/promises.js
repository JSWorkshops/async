/*jshint mocha: true, node: true */
"use strict";
const chai = require('chai');
// https://github.com/domenic/chai-as-promised
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
const expect = require('chai').expect;

describe("Promise API", () => {

  describe("static Promise.resolve()", () => {
    it("allows to create immediately resolved promises", () => {
      const promise = Promise.resolve("pass");
      return promise.should.become("pass");
    });
  });

  describe("static Promise.reject()", () => {
    it("allows to create immediately rejected promises", () => {
      const error = new Error("pass");
      const promise = Promise.reject(error);
      return promise.should.be.rejectedWith(error);
    });
  });

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

  describe(".then() method", () => {
    it("allows us to chain actions", () => {
      function doAsyncThingA(value){
        return new Promise((resolve)=>{
          setTimeout(() => resolve(value), 100);
        });
      }
      function doAsyncThingB(value){
        return new Promise((resolve)=>{
          setTimeout(() => resolve(value), 100);
        });
      }
      return Promise.resolve(doAsyncThingA("pass"))
        .then(doAsyncThingB)
        .should.eventually.become("pass");
    });

    it("allows us to chain between promise and non-promise functions", () => {

    });
  });

  describe(".catch() method", () => {
    it("allows us to catch unforeseen errors", () => {

    });
    it("allows us to catch unforeseen errors, and recover", () => {

    });
  });
});
