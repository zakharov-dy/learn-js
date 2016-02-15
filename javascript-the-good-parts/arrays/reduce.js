//reduce, который мы определяем сами
Array.prototype.reduce = function(f, firstValue){
   var value = firstValue;
   for (var i =0; i<this.length; i++){
      value = f(this[i], value);
   }
   return value;
};
[1,2,3].reduce(function(currentValue ,value){return value+=currentValue;}, 0);
[1,2,3].reduce(function(currentValue ,value){return value*=currentValue;}, 0);