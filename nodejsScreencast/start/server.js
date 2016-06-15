var User = require('./user');
var log = require('./logger')(module)

var phrases = require('db');

function run() {
   petya = new User('Петя');
   petya.hello(petya);
   log(phrases.getPhrase('Bue'))
}

if (module.parent) {
   console.log('required!');
   exports.run = run;
} else {
   run()
}
