// https://learn.javascript.ru/object-conversion#summa-proizvolnogo-kolichestva-skobok

const sum = function (n) {
   let m = n;
   const returnedFunc = function returnedFunc (n) {
      m+=n;
      return returnedFunc;
   };

   returnedFunc.toString = () => m;
   return returnedFunc;
};

module.exports = sum;