/**
 * Created by dmitry on 05.01.16.
 */
function filter(array, func) {
   return array.filter(function(item){
      return func(item);
   });
}

function inBetween(a, b){
   return function (item){
      return (a <= item) && (item <= b )
   }
}

function inArray(arr) {
   return function (item){
      for(var i = 0; i<arr.length; i++){
         if(item === arr[i]) return true
      }
      return false
   }
}