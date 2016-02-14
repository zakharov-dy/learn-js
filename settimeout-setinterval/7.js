//Напишите функцию delay(f, ms), которая возвращает обёртку вокруг f, задерживающую вызов на ms миллисекунд.
//
//   Например:
//
//function f(x) {
//   alert( x );
//}
//
//var f1000 = delay(f, 1000);
//var f1500 = delay(f, 1500);
//
//f1000("тест"); // выведет "тест" через 1000 миллисекунд
//f1500("тест2"); // выведет "тест2" через 1500 миллисекунд

var delay = function (f, del) {
   return function() {
      var that = this, arg = arguments;
      setTimeout(function(){f.apply(that, arg);}, del)
   };
};