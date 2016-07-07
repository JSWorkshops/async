/*jshint  -W082 */
/*globals define*/
'use strict';
{
  // async function takes a generator, and optional "this"
  function async(func, self) {
    // 1. Throws if not a function

    // returns returns a function "asyncFunction" that returns promise
    // It is called with zero or more arguments...
    return function asyncFunction(...args) {
      return new Promise((resolve, reject) => {
        let gen;
        // 2. func is not a generator, then wrap it.

        // 3. step the generator

        function step({value, done}) {
          // 4. if we are done, resolve.

          // 5. normalize promise

          // 6. then(handle, resolve, error)

          // 7. catch any potential errors
        }
      });
    };
  }

  async.task = (func, self) => async(func, self)();

  // 8. Export to node, browser, etc. ("browserify")
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = async;
  } else if (typeof define === 'function' && define.amd) {
    define([], () => async);
  } else {
    window.async = async;
  }
}
