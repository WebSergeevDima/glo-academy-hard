'use strict';

const lang = prompt('Введите "ru" или "en"');
const namePerson = prompt('Введите имя');

// 1) через if

const ruDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const enDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

if (lang === 'ru') {
    console.log(ruDays.join(', '));
} else if (lang === 'en') {
    console.log(enDays.join(', '));
}

// 2) через switch-case
switch (lang) {
    case 'ru':
        console.log(ruDays.join(', '));
        break;
    case 'en':
        console.log(enDays.join(', '));
};

// 3) через многомерный массив
const days = new Map([
    ['ru', ruDays],
    ['en', enDays],
]);

console.log(days.get(lang).join(', '));

// 4) namePerson

console.log(namePerson === 'Артем' ? 'директор' : namePerson === 'Александр' ? 'преподаватель' : 'студент');