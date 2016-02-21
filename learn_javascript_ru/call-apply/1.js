//Создайте функцию sumArgs(), которая будет суммировать все свои аргументы
function sumArgs() {
   return [].reduce.apply(arguments, [function(a, b){return a+b}, 0])
}

alert( sumArgs(1, 2, 3) );