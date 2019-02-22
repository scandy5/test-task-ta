var num10 = 1234; //Используйте 'use scrict', для чего описано в этой статье https://learn.javascript.ru/strict-mode. Для обьявления переменных используйте let или const. Напишите эту переменную после функции
function toHex(num10) { //toHex => convertDecToHex
    let num16 = '';
    for (let i = num10; i > 0; ) { //Делайте пропуск строки для выделение отдельных блоков кода.
        switch (i % 16) {
            case 10:
                {
                    num16 += 'a'; //Заносите break в фигурные скобки и пишите код в одном стиле как вы увидите ниже...
                }
                break;
            case 11:
                {
                    num16 += 'b';
                }
                break;
            case 12:
                {
                    num16 += 'c';
                }
                break;
            case 13:
                {
                    num16 += 'd';
                }
                break;
            case 14:
                {
                    num16 += 'e';
                }
                break;
            case 15: { //...Вот тут
                num16 += 'f';
            }
            default: {
                num16 += i % 16;
            }
        }
        i = i / 16;
        i = Math.trunc(i); //Строку выше можно обьеденить с этой.
    }
    var revurse = ''; //let или const вместо var
    if (num16 === '') return '';  //Пишите фигурные скобки в if для улучшения читаемости кода.
    else { //Если в операторе if есть return, то нет необходимости в else
        for (let j = num16.length; j >= 0; j--) {
            revurse += num16.charAt(j);
        }
        return revurse;
    }
}

var z = toHex(num10); //Не называйте переменные одной буквой, кроме случаев с циклами.
console.log(z);