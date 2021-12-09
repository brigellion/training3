'use strict';

const btn = document.getElementById('btn');
const square = document.getElementById('square');
const text = document.getElementById('text');
const range = document.getElementById('range');
const circle = document.getElementById('circle');

const changeColor = function () {
    console.log(text.value);
    square.style.backgroundColor = text.value;
    text.value = '';
};

const changeSize = function () {
    circle.style.width = range.value + '%';
    circle.style.height = range.value + '%';
};

const displaySize = function () {
    document.getElementById('range-span').textContent = range.value;
};

btn.addEventListener('click', changeColor);
range.addEventListener('input', changeSize);
range.addEventListener('input', displaySize);

document.getElementById('e_btn').style.display = 'none';






