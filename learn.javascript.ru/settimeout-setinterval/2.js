//Сделайте то же самое, что в задаче Вывод чисел каждые 100 мс(1.js), но с
// использованием рекурсивного setTimeout вместо setInterval.

var printNumbersInterval = function () {
   var n = 1;
   var printConsole = function printConsole() {
      if (n < 21){
         console.log(n);
         n++;
         setTimeout(printConsole, 100);
      }
   };
   setTimeout(printConsole, 100);
};
printNumbersInterval();