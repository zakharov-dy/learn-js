Function.prototype.defer = function (timer) {
   var that = this;
   return function () {
      var arg = arguments,
         context = this;
      setTimeout(function () {
         that.call(context, arg)
      }, timer)
   };
};

//Хороший комментарий
//var user = {
//   name: 'Vasya',
//   secondName: 'Pupkin',
//   getFullName: function () {
//      alert(this.name + ' ' + this.secondName);
//   }
//};
//
//user.getFullNameDelayed = user.getFullName.defer(1000);
//user.getFullNameDelayed();