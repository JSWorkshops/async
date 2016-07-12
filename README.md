# Async: Promise, Generators, Iterators, Async/Await
Given that we now have the [fundamentals of modern JS](https://github.com/JSWorkshops/fundamentals) down, it's time to focus on two of the more exciting new features of ES6: Promises and Generators.

In this tutorial, we will deep-dive into Promises and Generators (with a little side trip to understanding iterators) - and put what we learned in the fundamentals tutorials into practice. Once we get a handle on them, we will create an implementation of "async/await" - which is an upcoming ES7 feature that makes async programming much easier.

To see how all this is used in the real world, we will look at how Mozilla has been using generators+promises to implement features for the web, and take a look at how it can be super useful in testing programs that do async things (e.g., network and database calls).

In detail, what we will cover:

* Promises:
  * What/why are they?
  * how to create them and when to use them.
  * how to wrap legacy APIs, like XHR, in a promise.
* Promise statics:
  * Promise .all() .race(), .resolve(), .reject().
* Iterators:
  * `Symbol.iterator`.
  * "Roll your own" iterable objects.
* Generators:
  * theory/mechanics, and API.
* Using Generators + Promises to implement "async/await"


## Resources 
 * [An Introduction to Iteration in ES6 with Generator Functions](https://www.youtube.com/watch?v=wLOOFh8qoWA) 

## Code of Conduct
Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.
