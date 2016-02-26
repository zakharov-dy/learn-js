//В коде CoffeeMachine сделайте так, чтобы метод run выводил ошибку, если кофеварка выключена.
//
//    В итоге должен работать такой код:
//
//    var coffeeMachine = new CoffeeMachine(10000);
//coffeeMachine.run(); // ошибка, кофеварка выключена!
//А вот так – всё в порядке:
//
//    var coffeeMachine = new CoffeeMachine(10000);
//coffeeMachine.enable();
//coffeeMachine.run(); // ...Кофе готов!

function Machine(power) {
    this._enabled = false;

    var self = this;

    this.enable = function() {
        // используем внешнюю переменную вместо this
        self._enabled = true;
    };

    this.disable = function() {
        self._enabled = false;
    };

}

function CoffeeMachine(power) {
    Machine.apply(this, arguments);

    var waterAmount = 0;

    this.setWaterAmount = function(amount) {
        waterAmount = amount;
    };

    var parentEnable = this.enable;
    this.enable = function() {
        parentEnable(); // теперь можно вызывать как угодно, this не важен
        this.run();
    };

    function onReady() {
        alert( 'Кофе готово!' );
    }

    this.run = function() {
        if (this._enabled){
            setTimeout(onReady, 1000);
        }
        else {
            throw new Error("Кофеварка выключена")
        }
    };

}

