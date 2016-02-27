//Создайте класс для холодильника Fridge(power), наследующий от Machine, с приватным свойством food и методами addFood(...), getFood():
//
//Приватное свойство food хранит массив еды.
//   Публичный метод addFood(item) добавляет в массив food новую еду, доступен вызов с несколькими аргументами addFood(item1, item2...) для добавления нескольких элементов сразу.
//   Если холодильник выключен, то добавить еду нельзя, будет ошибка.
//   Максимальное количество еды ограничено power/100, где power – мощность холодильника, указывается в конструкторе. При попытке добавить больше – будет ошибка
//Публичный метод getFood() возвращает еду в виде массива, добавление или удаление элементов из которого не должно влиять на свойство food холодильника.

function Machine(power) {
   this._power = power;
   this._enabled = false;

   var self = this;

   this.enable = function() {
      self._enabled = true;
   };

   this.disable = function() {
      self._enabled = false;
   };
}
function Fridge(power){
   Machine.apply(this, arguments);
   this._power /= 100;
   var food = [];
   var disable = this.disable;
   this.disable = function () {
      if(food.length > 0){
         throw new Error('ошибка, в холодильнике есть еда')
      }
      else {
         disable()
      }
   };
   this.addFood = function () {
      if(!this._enabled){
         throw new Error('Холодитьник выключен')
      }

      if (food.length + arguments.length > this._power){
         throw new Error('Ошибка, слишком много еды')
      }
      else {
         food = food.concat([].slice.apply(arguments));
      }
   };

   this.getFood = function () {
      var returnMas = [];
      for(var i = 0; i < food.length; i++) {
         returnMas.push(food[i])
      }
      return returnMas;
   };

   this.filterFood = function (filterFunc) {
      console.log(filterFunc);
      console.log(food);
      console.log(food.filter(filterFunc));
      return food.filter(filterFunc);
   };

   this.removeFood = function(itemDelete){
      food = this.filterFood(function(item){
         if(itemDelete !== item) {
            return true
         }
      })
   }
}
