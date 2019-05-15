/**
 * Created by dmitry on 04.01.16.
 */
function sum (a){
   return function (b) {
      return a + b;
   }
}
sum(1)(2);