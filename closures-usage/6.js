/**
 * Created by dmitry on 05.01.16.
 */
// Вариант 1
function makeArmy() {

   var shooters = [];
   var shooter = function(i) {
      return function() { // функция-стрелок
         alert(i);// выводит свой номер
      };
   };

   for (var i = 0; i < 10; i++) {
      shooters[i] = shooter(i);
   };

   return shooters;
}

var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2.js...9