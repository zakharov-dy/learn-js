//Напишите функцию debounce(f, ms), которая возвращает обёртку, которая передаёт
// вызов f не чаще, чем раз в ms миллисекунд.
//
//«Лишние» вызовы игнорируются. Все аргументы и контекст – передаются.
//
//   Например:
//
//function f() { ... }
//
//var f = debounce(f, 1000);
//
//f(1); // выполнится сразу же
//f(2); // игнор

setTimeout( function() { f(3) }, 100); // игнор (прошло только 100 мс)
setTimeout( function() { f(4) }, 1100); // выполнится
setTimeout( function() { f(5) }, 1500); // игнор

var debounce = function (f, ms) {
   if (typeof flag === 'undefined') var flag = true;
      return function (){
         if (flag) {
            f.apply(this, arguments);
            flag = false;
            setTimeout(function () {
               flag = true
            }, ms)
         }

      }
};