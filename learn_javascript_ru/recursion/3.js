// ч/з рекурсию
function fib(n) {
   if (n == 1 || n == 2) {
      return 1
   } else {
      return fib(n-1) + fib(n-2)
   };
}

function fib(n) {
   if (n < 3) {
      return 1
   }
   else {
      var previous = 0, result = 1;
      for (var i = 1; i != n; i++) {
         result += previous;
         previous = result - previous;
      };
      return result
   }
};
