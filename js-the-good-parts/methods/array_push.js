// реализация метода push
Array.prototype.pop = function () {

   // копирование аргументов, переданных в функцию в
   // массив [].slice.apply(arguments)

   //
   this.splice
      .apply(this, [this.length, 0].concat([].slice.apply(arguments)));
   return this.length;
};
