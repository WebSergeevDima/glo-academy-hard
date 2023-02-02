'use strict';

const placeholder = 'Передайте строку';

function getSmallContent(str) {

    str = str.trim();

    /*
    try {
        typeof str !== 'string';
        throw new TypeError('Ошибка');
    } catch (e) {}
    */

    if (typeof str !== 'string') {
        return '';
    } else {
        return str.length > 30 ? str.slice(0, 30) + '...' : str;
    }

}

console.log(getSmallContent(prompt(placeholder)));