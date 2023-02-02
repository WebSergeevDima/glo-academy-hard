'use strict';

const placeholder = 'Передайте строку';

function getSmallContent(str) {

    if (!isNaN(parseFloat(str))) {
        alert('Вы передали НЕ строку!');
        getSmallContent(prompt(placeholder));
    }

    alert('Короткая строка: ' + (str.trim().length > 30 ? str.trim().slice(0, 30) + '...' : str.trim()));

}

getSmallContent(prompt(placeholder));