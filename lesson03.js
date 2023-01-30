'use strict';

const lang = prompt('Введите "ru" или "en"');

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
        console.log('Пн');
        console.log('Вт');
        console.log('Ср');
        console.log('Чт');
        console.log('Пт');
        console.log('Сб');
        console.log('Вс');
        break;
    case 'en':
        console.log('Mo');
        console.log('Tu');
        console.log('We');
        console.log('Th');
        console.log('Fr');
        console.log('Sa');
        console.log('Su');
};

// 3) через многомерный массив
const days = [
    ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
];

console.log(lang === 'ru' ? days[0].join(', ') : days[1].join(', '));

// 4) namePerson

const namePerson = prompt('Введите имя');

console.log(namePerson === 'Артем' ? 'директор' : namePerson === 'Александр' ? 'преподаватель' : 'студент');