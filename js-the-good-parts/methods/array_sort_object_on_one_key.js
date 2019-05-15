// Функция, передающаяся в метод sort для сортировки объекта по заданному ключу.
obj1 = {
   name: 'Albert'
};

obj2 = {
   name: 'Felix'
};

obj3 = {
   name: 'Zorro'
};

obj4 = {
   name: 'Alex'
};

mas = [obj2, obj3, obj1, obj4];

function sortArrayOfObjects(key){
   return function (a, b){
      var p1 = a[key], p2 = b[key];
      if (typeof a === 'object' && typeof b === 'object' && p1 && p2){
         if (p1 === p2) return 0;

         if (typeof p1 === typeof p2){
            return a[key] > b[key] ? 1 : -1;
         }

         return typeof p1 > typeof p2 ? 1 : -1
      }
      else {
         throw {
            name: 'Error',
            message: 'Bad array'
         }
      }
   }
}

var sortByName = sortArrayOfObjects('name');

mas.sort(sortByName);

for(var i =0; i < mas.length; i++){
   console.log(mas[i].name);
}