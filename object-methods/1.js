/**
 * Created by dmitry on 14.01.16.
 */
var calculator = {
   read: function(){
      this.a = +prompt('введи число 1', 0);
      this.b = +prompt('введи число 2', 0);
   },
   sum: function(){
      return this.a + this.b
   },
   mul: function(){
      return this.a * this.b
   }
};