//Добавить в конструктор Article:
//
//   Подсчёт общего количества созданных объектов.
//   Запоминание даты последнего созданного объекта.
//   Используйте для этого статические свойства.
//
//   Пусть вызов Article.showStats() выводит то и другое.

function Article() {
   this.created = new Date();
   Article.currentDate = this.created;
   Article.count++;
}
Article.count = 0;
Article.showStats = function(){
   console.log("Всего: " + Article.count + ", Последняя: " + Article.currentDate);
};
new Article();
new Article();

Article.showStats(); // Всего: 2.js, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)