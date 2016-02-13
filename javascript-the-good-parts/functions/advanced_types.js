// Расширение типов через создание метода, доступного для всех функций

Function.prototype.method = function(name, func){
    if(!this.prototype[name]){
        this.prototype[name] = func;
        return this;
    }
};