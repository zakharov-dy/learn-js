//function f(x) {
//   return Math.random() * x; // random для удобства тестирования
//}
//
////function makeCaching(f) { /* ваш код */ }
//function makeCaching(f) {
//
//f = makeCaching(f);
//
//var a, b;
//
//a = f(1);
//b = f(1);
//alert( a == b ); // true (значение закешировано)
//
//b = f(2);
//alert( a == b ); // false, другой аргумент => другое значение

function makeCaching(f) {
   if (typeof cache == 'undefined') var cache, result;

   return function(){
      if (cache != arguments[0]) {
         cache = arguments[0];
         result = f.call(this, arguments[0]);
         return result
      }
      else return result
   };

}
