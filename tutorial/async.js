/*jshint node:true, browser:true, noyield:true, esnext: true */
/*globals define*/

function*(){
  try{
    try{
      yield Promise.reject(new Error())
    }catch(err){
      throw err;
    }
  }
}

"use strict";
{
  // async function takes a generator, and optional "this"
  function async(func, self) {
    // returns returns a function asyncFunction that returns promise
    // It is called with zero or more arguments...
    return function asyncFunction(...args) {
      return new Promise((resolve, reject) => {
        if(typeof func !== "function"){
          throw new TypeError("need a function!");
        }
        const gen = func.call(self, ...args);
        if(gen.constructor.name !== "GeneratorFunction"){
          return resolve(gen);
        }

        try {
          step(gen.next());
        }catch(err){
          reject(err);
        }

        function step({value, done}){
          if(done){
            return resolve(value);
          }
          if(!isThenable(value)){
            return step(gen.next(value));
          }
          // promise ? jQuery? blue
          Promise
            .resolve(value)
            .then(
              value => step(gen.next(value)),
              err => step(gen.throw(err))
            )
            .catch(reject);
        }
      });
    };
  }

  function isThenable(obj) {
    return obj instanceof Promise || (typeof obj === "object" && typeof obj.then === "function");
  }
}
