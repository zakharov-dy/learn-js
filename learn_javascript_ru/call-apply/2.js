//Напишите функцию applyAll(func, arg1, arg2...), которая получает функцию func и произвольное количество аргументов.
//
//   Она должна вызвать func(arg1, arg2...), то есть передать в func все аргументы, начиная со второго, и возвратить результат.

function applyAll(){
   return arguments[0].apply(null, [].slice.apply(arguments, [1]));
}