//function formatDate(date) { /* ваш код */ }
//
//alert( formatDate('2011-10-02') ); // 02.10.11
//alert( formatDate(1234567890) ); // 14.02.09
//alert( formatDate([2014, 0, 1]) ); // 01.01.14
//alert( formatDate(new Date(2014, 0, 1)) ); // 01.01.14

function formatDate(date) {
   var parseDateToString = function(realData) {
      console.log(realData);
      var day = realData.getDate() + '',
         month = (realData.getMonth() + 1) + '',
         year = realData.getFullYear().toString().substr(2,2);
      day = day.length > 1 ? day : '0' + day;
      month = month.length > 1 ? month : '0' + month;
      return day + '.' + month + '.' +  year;
   };

   switch ({}.toString.call(date).slice(8, -1)) {
      case 'Date':
         return parseDateToString(date);
      break;
      case 'String':
         return parseDateToString(new Date(date));
      break;
      case 'Number':
         return parseDateToString(new Date(date*1000));
      break;
      case 'Array':
         return parseDateToString(new Date(date[0], date[1], date[2]))
   }
}