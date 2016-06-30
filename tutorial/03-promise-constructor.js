/*jshint mocha: true, node: true */
"use strict";
const chai = require('chai');
// https://github.com/domenic/chai-as-promised
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
const expect = require('chai').expect;

describe("Promise constructor", () => {

  // it("allows us to create instances of promises", () => {
  //   const promise;
  //   expect(promise).to.be.an.instanceof(Promise);
  // });

  // it("allows us to immediately resolve with a value", () => {
  //   const promise;
  //   return promise.should.eventually.equal("pass");
  // });

  // it("allows us to immediately reject with an error", () => {
  //   const error = new Error("pass");
  //   const promise;
  //   return promise.should.be.rejectedWith(error);
  // });

  // it("allows us to resolve with a value in the future", () => {
  //   const promise = new Promise((resolve) => {
  //     setTimeout(() => resolve("pass"), 100);
  //   });
  //   return promise.should.eventually.equal("pass");
  // });

  // it("allows us to reject with an error in the future", () => {
  //   const error = new Error("pass");
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(() => error, 100);
  //   });
  //   return promise.should.eventually.be.rejectedWith(error);
  // });

});
