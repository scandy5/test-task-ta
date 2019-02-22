function basic_op(operator, value1, value2) { //Используйте 'use scrict', для чего описано в этой статье https://learn.javascript.ru/strict-mode. Используйте camel case для именнования функций
  if (operator == '+') { //Делайте строгое сравнение "==="
    return value1 + value2;
  } else if (operator == '-') { //Избавьтесь от else. После if пропускайте строку для лучшей читаемости.
    return value1 - value2;
  } else if (operator == '*') {
    return value1 * value2;
  } else if (operator == '/') {
    return value1 / value2;
  }
}