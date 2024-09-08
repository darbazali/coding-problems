/*
fibonacci
Write a function, fibonacci, that takes in a number argument, n, and returns the n-th number of the Fibonacci sequence.

The 0-th number of the sequence is 0.

The 1-st number of the sequence is 1.

To generate further numbers of the sequence, calculate the sum of previous two numbers.

You must solve this recursively.

@examples:
fibonacci(0); // -> 0
fibonacci(1); // -> 1
fibonacci(2); // -> 1
fibonacci(8); // -> 21

*/

export const fibonacciRecursive = (n: number): number => {
  if (n === 0) return 0
  if (n === 1) return 1

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}
