//Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:
//
//   Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
//   Метод sum() возвращает сумму запомненных свойств.
//   Метод mul() возвращает произведение запомненных свойств.

Calculator = function(){
   this.a = 0;
   this.b = 0;
   this.read = function(){
      this.a = +prompt('Введи число', '0');
      this.b = +prompt('Введи число', '0');
   };

   this.sum = function(){
      return this.a + this.b
   };

   this.mul = function(){
      return this.a * this.b
   };
};