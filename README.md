# Description

This is a simple example of pulling rust code into nodejs. 

The main library used is napi-rs: https://napi.rs/

The idea behind `napi-rs` is that you would export this project as a package and pull it in via `npm` or `yarn` into as conuming package.

In this project though, we're consuming the rust code in `consume.js`


# The project itself.

This project is also supposed to demonstrate the speed of pulling rust code into nodejs. 
Both Rust, and Node will calculate a (similar) number of primes using sieve of eratosthenes algorithms
 and then display the amount of time it took.


Since my goal was just to give a performacne demonstration and not write the sievs myself, I just pulled in
packages from other seives. The one for JS is actually written in ES5 but I don't think that would have any major 
effect on performance. 

# Running the project

After running install and build (which should run in a `postinstall` script), you should just need to run `node consume.js` 
and watch the magic. 