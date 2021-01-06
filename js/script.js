'use strict'; 
var btns = [];

btns = document.querySelectorAll('button');

console.log(btns);

btns.forEach(element => {
    element.addEventListener('click', () => { 
        element.style.display = 'none';
    })
})
