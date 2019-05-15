//Функция сортирует массив, в котором "скучкованы" цифры и строки.

var arr = ['bb', 'a', 'qq', 'r', 'q', 'aa', 4, 63, 8, 7];

arr.sort(function(a, b){
   if (a === b) return 0;

   if (typeof a == typeof b){
      return a > b ? 1 : -1
   }
   else {
      typeof a > typeof b ? 1 : -1
   }
});

console.log(arr);