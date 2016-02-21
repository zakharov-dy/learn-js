// Псевдоклассовое наследование
//
// В этой главе представлено наследование посредством конструкторов и оператора
// new. Приводится два примера, в которых делается одно и тоже.
//
// В первом примере создается конструктор Mammal, прототип которого имеет два
// метода - getName и says. Создается второй конструктор - Cat, прототипом
// которого является новый объект (в коде это Cat.prototype, он наследует от
// Mammal.prototype), созданный конструктором Mammal. Таким образом получаем
// цепочку прототипов: Cat -> Cat.prototype -> Mammal.prototype .
//
// Теперь расширим Cat.prototype, определив в нем метод purr и переопределив
// метод getName, который имелся в цепочке прототипов в Mammal.prototype

// Первый пример
var Mammal = function(name){
   this.name = name;
};

Mammal.prototype.getName = function(){
   return this.name;
};

Mammal.prototype.says = function(){
   return this.saying || '';
};

var Cat = function(name){
   this.name = name;
   this.saying = 'meow';
};

Cat.prototype = new Mammal();

Cat.prototype.purr = function(){
   return 'r-r-r-r-r'
};

Cat.prototype.getName = function () {
   return this.says() + ' ' + this.name
};

var myCat = newCat('Cat');
console.log(myCat.says());
console.log(myCat.purr());
console.log(myCat.getName());

//Второй способ делает то же самое, что и первый но более изящно.
// Суть в том, что создается метод(в данном случае inherits), который принимает
// в себя конструктор. Прототипом объекта, на котором был вызван данный метод,
// становится экземпляр конструктора, переданного в параметры. После этого
// возвращается сам объект, что дает возможность использования каскадов.

// Второй пример

// Расширение типов через создание метода, доступного для всех функций
// (описано в предыдущих главах)
Function.prototype.method = function(name, func){
   if(!this.prototype[name]){
      this.prototype[name] = func;
      return this;
   }
};

Function.method('inherits', function(Parent){
   this.prototype = new Parent; return this;
});

var Cat = function(name){
   this.name = name;
   this.saying = 'meow';
}.inherits(Mammal).method('purr', function(){
   return 'r-r-r-r-r'
}).method('getName', function () {
   return this.says() + ' ' + this.name;
});