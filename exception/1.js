//Сравните два фрагмента кода.
//
//    Первый использует finally для выполнения кода по выходу из try..catch:
//
//    try {
//        начать работу
//        работать
//    } catch (e) {
//        обработать ошибку
//    } finally {
//        финализация: завершить работу
//    }
//Второй фрагмент просто ставит очистку ресурсов за try..catch:
//
//    try {
//        начать работу
//    } catch (e) {
//        обработать ошибку
//    }
//
//финализация: завершить работу
//Нужно, чтобы код финализации всегда выполнялся при выходе из блока try..catch и, таким образом, заканчивал начатую работу. Имеет ли здесь finally какое-то преимущество или оба фрагмента работают одинаково?
//
//    Если имеет, то дайте пример когда код с finally работает верно, а без – неверно.


// Пример работает с finally и не работает без него
try {
    a = prompt('введи что-нибудь', '2+2');
    alert(eval(a));

} catch (e) {
    if (e.name == 'URIError') {
        // делаем что-то
    }
    else throw e;
} finally {
    alert('скрипт упал или нет, но алерт выполнился');
}