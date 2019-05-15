function sumTo (n) {
   var result = 0;
   while(n >= 1) {
      result += n--;
   }
   return result
}

function sumTo (n) {
   if (n == 1) {
      return n
   }
   else {
      return n + sumTo(n-1)
   };
}

function sumTo (n) {
   return n*(n+1)/2
}