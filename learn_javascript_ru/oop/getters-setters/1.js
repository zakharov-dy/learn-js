function User() {
   var firstName, middleName;
   this.setFirstName = function(name){
      firstName = name;
   };

   this.setSurname = function (surname) {
      middleName = surname;
   };

   this.getFullName = function () {
      return firstName + ' ' + middleName;
   };
}

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");

alert( user.getFullName() ); // Петя Иванов