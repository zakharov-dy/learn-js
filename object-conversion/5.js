/**
 * Created by dmitry on 30.01.16.
 */
function sum(number){
   var result = number;
   var returnFunction = function returnFunction(number){
      result+=number;
      return returnFunction
   };
   returnFunction.toString = function(){
      return result
   };
   return returnFunction;
}

sum(1)(2) == 3; // 1 + 2.js
sum(1)(2)(3) == 6; // 1 + 2.js + 3
sum(5)(-1)(2) == 6;
sum(6)(-1)(-2)(-3) == 0;
sum(0)(1)(2)(3)(4)(5) == 15;