'use strict'; 
var btns = [];

btns = document.querySelectorAll('button');

console.log(btns);

btns.forEach(element => {
    addEventListener('click', () => { 
        btns[element].style.display = 'none';
    })
})
