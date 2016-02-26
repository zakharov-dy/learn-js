//Когда кофеварку выключают – текущая варка кофе должна останавливаться.
//
//    Например, следующий код кофе не сварит:
//
//    var coffeeMachine = new CoffeeMachine(10000);
//coffeeMachine.enable();
//coffeeMachine.run();
//coffeeMachine.disable(); // остановит работу, ничего не выведет

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

    function onReady() {
        console.log( 'Кофе готово!' );
    }

    this.run = function() {
        if (this._enabled){
            var self = this;
            setTimeout(function(){
                if (self._enabled) {
                    onReady()
                }
            }, 1000);
        }
        else {
            throw new Error("Кофеварка выключена")
        }
    };

}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable(); // остановит работу, ничего не выведет