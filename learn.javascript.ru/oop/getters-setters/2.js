//Добавьте кофеварке геттер для приватного свойства power, чтобы внешний код мог узнать мощность кофеварки.

function CoffeeMachine(power, capacity) {
   var waterAmount = 0;
   this.waterAmount = function(amount) {
      if (!arguments.length) return waterAmount;
      if (amount < 0) {
         throw new Error("Значение должно быть положительным");
      }
      if (amount > capacity) {
         throw new Error("Нельзя залить воды больше, чем " + capacity);
      }
      waterAmount = amount;
   };

   this.getPower = function () {
      return power;
   }
}

var coffeeMachine = new CoffeeMachine(1000, 500);

// пример использования
coffeeMachine.waterAmount(450);
alert( coffeeMachine.waterAmount() ); // 450
alert( coffeeMachine.getPower() ); // 1000
