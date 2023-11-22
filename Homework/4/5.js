'use strict';
function testDateTime(a, b) {
    let x = new Date(a);
    let y = new Date(b);
    const d = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return (x >= y) ? d[x.getDay()] : d[y.getDay()];
}