#![deny(clippy::all)]

extern crate stopwatch;
use stopwatch::{Stopwatch};

#[macro_use]
extern crate napi_derive;

#[napi]
fn sum(a: i32, b: i32) -> i32 {
  a + b
}

#[napi] 
fn get_primes(num: i32) -> String {
  let sw = Stopwatch::start_new();
  let num: u64 = num.try_into().unwrap();
  let (_lo, hi) = slow_primes::estimate_nth_prime(num);
  let sieve = slow_primes::Primes::sieve(hi as usize);
  println!("Rust Internal Time Elapsed: {} seconds", (sw.elapsed_ms() as f64) / (1000_f64));
  format!("Calculated {} primes in Rust", sieve.primes().count())
}