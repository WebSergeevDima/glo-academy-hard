'use strict';

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && num === num.trim();
}

console.log('1234', isNumber('1234'));
console.log(' 1234 ', isNumber(' 1234 '));
console.log(' 1234', isNumber(' 1234'));
console.log('1234 ', isNumber('1234 '));
console.log('12sddfsf34', isNumber('12sddfsf34'));
console.log(' 12sdfsdfs34 ', isNumber(' 12sdfsdfs34 '));
console.log(' 12sdfsdfds34', isNumber(' 12sdfsdfds34'));
console.log('12sdfsdf34 ', isNumber('12sdfsdf34 '));