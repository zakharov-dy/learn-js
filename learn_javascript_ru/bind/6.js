// Решение с bind
"use strict";

function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
}

var user = {
  login: 'Василий',
  password: '12345',

  // метод для вызова из ask
  loginDone: function(result) {
    alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
  },

  checkPassword: function() {
    ask("Ваш пароль?", this.password, this.loginDone.bind(this, true), this.loginDone.bind(this, false))
  }
};

var vasya = user;
user = null;
vasya.checkPassword();

// Решение без bind
"use strict";

function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
}

var user = {
  login: 'Василий',
  password: '12345',

  // метод для вызова из ask
  loginDone: function(result) {
    alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
  },

  checkPassword: function() {
    they = this;
    ask("Ваш пароль?", this.password,
      function() {
        they.loginDone(true);
      },
      function() {
        they.loginDone(false);
      }
    );
  }
};

var vasya = user;
user = null;
vasya.checkPassword();