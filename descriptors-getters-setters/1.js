function User(fullName) {
   this.fullName = fullName;
}

var vasya = new User("Василий Попкин");

Object.defineProperty(vasya, 'firstName',{
   get: function(){
      return this.fullName.split(' ')[0]
   },
   set: function(value){
      this.fullName = value + ' ' + this.fullName.split(' ')[1]
   }
});

Object.defineProperty(vasya, 'lastName',{
   get: function(){
      return this.fullName.split(' ')[1];
   },
   set: function(value){
      this.fullName = this.fullName.split(' ')[0] + ' ' + value;
   }
});