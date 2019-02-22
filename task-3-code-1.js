'use strict';

function simpleNumbers(n) {
  numbers: for (let i = 2; i <= n; i++) { //Объвляйте переменную перед циклом for
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue numbers; //Делайте строгое сравнение "===". Пишите фигурные скобки для выражения в if.
    }
    console.log(i);
  }
}

simpleNumbers(100);