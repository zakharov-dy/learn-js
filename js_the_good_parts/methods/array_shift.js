Array.prototype.shift = function () {
   return this.splice(0, 1)[0];
};