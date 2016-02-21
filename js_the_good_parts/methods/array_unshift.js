//Реализация метода unshift

Array.prototype.unshift = function(){
   [].splice.apply(this, [0, 0].concat([].slice.apply(arguments)));
   return this.length;
};