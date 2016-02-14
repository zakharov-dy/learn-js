//Напишите функцию printNumbersInterval(), которая последовательно выводит
// в консоль числа от 1 до 20, с интервалом между числами 100 мс. То есть, весь
// вывод должен занимать 2000 мс, в течение которых каждые 100 мс в консоли
// появляется очередное число.

var printNumbersInterval = function () {
   var n = 1;
   var printConsole = function () {
      if (n < 21){
         console.log(n);
         n++;
      }
      else clearInterval(interval);
   };

   var interval = setInterval(printConsole, 100)
};
printNumbersInterval();