// 1, 1, 2, 3, 5, 8, 13, 21, 34, n
// n = (n-1) + (n-2)

function fibonacciKeN(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacciKeN(n - 1) + fibonacciKeN(n - 2);
}

// console.log(fibonacciKeN(4));
// console.log(fibonacciKeN(8));
// console.log(fibonacciKeN(10));

module.exports = fibonacciKeN;
