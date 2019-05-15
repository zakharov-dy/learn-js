//Напишите конструктор Calculator, который создаёт расширяемые объекты-калькуляторы.
//
//   Эта задача состоит из двух частей, которые можно решать одна за другой.
//
//   Первый шаг задачи: вызов calculate(str) принимает строку, например «1 + 2.js», с жёстко заданным форматом «ЧИСЛО операция ЧИСЛО» (по одному пробелу вокруг операции), и возвращает результат. Понимает плюс + и минус -.
//
//Пример использования:
//
//             var calc = new Calculator;
//             alert( calc.calculate("3 + 7") ); // 10
//Второй шаг – добавить калькулятору метод addMethod(name, func), который учит калькулятор новой операции. Он получает имя операции name и функцию от двух аргументов func(a,b), которая должна её реализовывать.
//
//   Например, добавим операции умножить *, поделить / и возвести в степень **:
//
//             var powerCalc = new Calculator;
//             powerCalc.addMethod("*", function(a, b) {
//                return a * b;
//             });
//             powerCalc.addMethod("/", function(a, b) {
//                return a / b;
//             });
//             powerCalc.addMethod("**", function(a, b) {
//                return Math.pow(a, b);
//             });
//
//             var result = powerCalc.calculate("2.js ** 3");
//             alert( result ); // 8
function Calculator(){
   this['+'] = function(a, b){
      return a + b;
   };

   this['-'] = function(a, b){
      return a - b;
   };

   this.calculate = function(expression){
      var members = expression.split(' ');
      if (this[members[1]] !== undefined){
         return this[members[1]](+members[0], +members[2])
      }
   };
   this.addMethod = function(name, method){
      this[name] = method;
   }
}