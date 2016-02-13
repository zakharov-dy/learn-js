   // Функциональное наследование (посредством шаблона модуля)
   //
   // В этой главе представлено наследование посредством использования функции, внутри которой определены 4 этапа:
   // Создается новый объект
   //
   // Определются приватные методы и переменные, к которым будет иметь доступ новый
   // объект
   //
   // Новый объект дополняется методами, имеющими доступ к методам и переменным,
   // определенным на втором этапе
   //
   // Возвращается новый объект
   //
   // В следующем примере будет создана функция mammal, выполняющая 4 условия.
   // Далее будет создан объект, имеющий доступ к объекту, скрытому по ссылке,
   // посредством методов, однако его методы не могут изменить первоначальный
   // объект. Таким образом мы защитили первоначальный объект от изменения.
   //
   // Далее мы создаем ещё одну функцию, которая создает экземпляр mammal, а затем
   // дополняет его своими возможностями (своего рода наследование).

   var mammal = function(spec){
      var that = {};
      that.getName = function () {
         return spec.name || '';
      };

      that.says = function(){
         return spec.saying || '';
      };

      return that;
   };

   var myMammal = mammal({name: 'Mammal'});

   var cat = function(spec){
      spec.saying = spec.saying || 'meow';
      var that = mammal(spec);

      that.purr = function(){
         return 'r-r-r-r-r'
      };

      that.getName = function () {
         return that.says() + ' ' + spec.name
      };

      return that;
   };

   var myCat = cat({name: 'Cat'});

   //Функциональное наследование позволяет не только использовать приватность
   // объекта, но и использовать суперметоды, то есть использовать методы
   // объекта, от которого был "унаследован" наш объект переопределив их у
   // себя, но получая доступ к ним посредством другого имени метода или свойства.
   // Слово "унаследован" беру в ковычки, поскольку реального наследования не
   // происходит, то есть не используется (по крайней мере в данном случае)
   // object.prototype.

   //Работает в браузере, но не на nodeJS


   // Расширение типов через создание метода, доступного для всех функций
   // (описано в предыдущих главах)
   Function.prototype.method = function(name, func){
      if(!this.prototype[name]){
         this.prototype[name] = func;
         return this;
      }
   };

   Object.method('superior', function(name){
      var that = this,
          method = that[name];
      return function (){
         return method.apply(that, arguments);
      };
   });

   var coolcat = function (spec) {
      var that = cat(spec),
         superGetName = that.superior('getName');
      console.log(superGetName);
      that.getName = function () {
         return 'like' + superGetName() + 'baby';
      };

      return that;
   };

   var myCoolCat = coolcat({name: 'Coolcat'});
   var name = myCoolCat.getName();
