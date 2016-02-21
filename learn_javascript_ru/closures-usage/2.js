/**
 * Created by dmitry on 04.01.16.
 */
function makeBuffer() {
   var text = '';

   return function(piece) {
      if (arguments.length == 0) { // вызов без аргументов
         return text;
      }
      text += piece;
   };
};

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
console.log( buffer() ); // Замыкания Использовать Нужно!

var buffer = makeBuffer();
buffer(0);
buffer(1);
buffer(0);

console.log( buffer() ); // '010'