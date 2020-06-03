'use strict';

const div = document.querySelector('div');
let codeHtml = '';
const imiona = ['Kasia', 'Beata', 'Anna', 'Piotr', 'Daniel', 'Łukasz', 'Kuba', 'Michał', 'Maciek', 'Basia'];

imiona.forEach((elem, i) => {
    // console.log(`${++i}${'.'} ${elem}<br>`);
    codeHtml += `${++i}${'.'} ${elem}<br>`;
});

div.innerHTML = codeHtml;