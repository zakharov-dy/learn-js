// module.exports = exports = this

var phrases = require('db');

phrases.connect();

function User(name) {
   this.name = name;
}

User.prototype.hello = function(who) {
   console.log(phrases.getPhrase('Hello') + ' ' + who.name);
};

module.exports = User;

