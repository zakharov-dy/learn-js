module.exports = function (module) {
   return function (str) {
      console.log(module.name + str)
   }
}