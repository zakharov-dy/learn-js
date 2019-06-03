//Второй способ

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

    this.enable = function() {
        this._enabled = true;
    };

    this.disable = function() {
        this._enabled = false;
    };
}

function CoffeeMachine(power) {
    Machine.apply(this, arguments);

    var waterAmount = 0;
    var timerId;

    this.setWaterAmount = function(amount) {
        waterAmount = amount;
    };

    function onReady() {
        alert('Кофе готов!');
    }

    var parentDisable = this.disable;
    this.disable = function() {
        parentDisable.call(this);
        clearTimeout(timerId);
    };

    this.run = function() {
        if (!this._enabled) {
            throw new Error("Кофеварка выключена");
        }
        timerId = setTimeout(onReady, 1000);
    };

}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable(); // остановит работу, ничего не выведет