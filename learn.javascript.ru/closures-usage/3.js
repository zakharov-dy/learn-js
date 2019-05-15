/**
 * Created by dmitry on 04.01.16.
 */
function makeBuffer() {
   var text = '';

   var func = function(piece) {
      if (arguments.length == 0) {
         return text;
      }
      text += piece;
   };
   func.clear = function(){text = '';};
   return func
};

var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
alert( buffer() ); // Тест тебя не съест

buffer.clear();

alert( buffer() ); // ""