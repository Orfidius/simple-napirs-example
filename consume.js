const { getPrimes: primesRust } = require('./index.js');
const sieveOfErathosthenes = require('sieve-of-eratosthenes');

/*
 I think there is a fundemental difference between what Rust and JS is doing. 
 I think Rust is calculating n primes while JS is calcualting 'up to' n primes.
 This would definatey create the difference in times I'm getting.


 Rust; slow_primes: https://docs.rs/slow_primes/0.1.14/slow_primes/
 JS Sieve of Erathoshenes: https://github.com/miguelmota/sieve-of-eratosthenes
*/

/* 
  The Javascript implementation claculates primes up to a certain number, 
  the rust implementation calculates, the rust implementation calculates that total number of primes. 
  To get around this, we tell JS to calculate up to 100 million, and we tell Rust to calculate 5761455 prime numbers.
  Because there are 5761455 prime numbers in 100 million.
*/
const jsnum = 100_000_000;
const rustNum = 5761455;

const rustNow = new Date();
const rustPrimesResult = primesRust(rustNum);
const rustCompletedAt = new Date();
const rustCompletionTime = rustCompletedAt.getTime() - rustNow.getTime();
console.log(`Rust Completed in: ${rustCompletionTime/1000} seconds`);
console.log(rustPrimesResult);

const jsNow = new Date();
const jsPrimesResult = sieveOfErathosthenes(jsnum);
const jsCompletedAt = new Date();
const jsCompletionTime = jsCompletedAt.getTime() - jsNow.getTime();

console.log(`NodeJS Completed in: ${jsCompletionTime/1000} seconds`);
console.log(`Calculated ${jsPrimesResult.length} primes in JS`);

