/* 
fibonacci
---------
Write a function, fibonacci, that takes in a number argument, n, and returns the n-th number of the Fibonacci sequence.

The 0-th number of the sequence is 0.

The 1-st number of the sequence is 1.

To generate further numbers of the sequence, calculate the sum of previous two numbers.

You must solve this recursively.

@test-cases
-----------
fibonacci(0); // -> 0
fibonacci(1); // -> 1
fibonacci(2); // -> 1
fibonacci(3); // -> 2
fibonacci(8); // -> 21

*/

const fibonacci = (n) => {
  if (n === 0 || n === 1) return n
  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(0)) // -> 0
console.log(fibonacci(1)) // -> 1
console.log(fibonacci(2)) // -> 1
console.log(fibonacci(3)) // -> 2
console.log(fibonacci(8)) // -> 21
