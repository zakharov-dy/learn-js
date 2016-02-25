//Из внешнего кода мы хотели бы иметь возможность понять – запущена кофеварка или нет.
//
//   Для этого добавьте кофеварке публичный метод isRunning(), который будет возвращать true, если она запущена и false, если нет.
//
//   Нужно, чтобы такой код работал:
//
//   var coffeeMachine = new CoffeeMachine(20000, 500);
//coffeeMachine.setWaterAmount(100);
//
//alert( 'До: ' + coffeeMachine.isRunning() ); // До: false
//
//coffeeMachine.run();
//alert( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true
//
//coffeeMachine.setOnReady(function() {
//   alert( "После: " + coffeeMachine.isRunning() ); // После: false
//});
//Исходный код возьмите из решения предыдущей задачи.

function CoffeeMachine(power, capacity) {
   var waterAmount = 0;
   var isRun = false;
   var WATER_HEAT_CAPACITY = 4200;

   function getTimeToBoil() {
      return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
   }

   this.setWaterAmount = function(amount) {
      // ... проверки пропущены для краткости
      waterAmount = amount;
   };

   this.getWaterAmount = function(amount) {
      return waterAmount;
   };

   function onReady() {
      alert( 'Кофе готов!' );
   }

   this.setOnReady = function(newOnReady) {
      onReady = newOnReady;
   };

   this.isRunning = function () {
      return isRun
   };

   this.run = function() {
      isRun = true;
      setTimeout(function() {
         isRun = false;
         onReady();
      }, getTimeToBoil());
   };

}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

alert( 'До: ' + coffeeMachine.isRunning() ); // До: false

coffeeMachine.run();
alert( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true

coffeeMachine.setOnReady(function() {
   alert( "После: " + coffeeMachine.isRunning() ); // После: false
});