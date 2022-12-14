let cache = [];
let operators =[];
let index = 0;
const answer = document.querySelector('.answer');
let stringOutput = '';

function log() {
    let output = this.id;    
    stringOutput += this.id[1];
    cache[index] = cache[index] * 10 + +output[1] || +output[1];
    answer.innerHTML = `${stringOutput}`;
}

for(i = 0; i < 10; i++) {
    const element = document.querySelector(`#A${i}`);
    element.addEventListener('click', log);
}


const plus = document.querySelector('#plus');
plus.addEventListener('click', operation);

const minus = document.querySelector('#minus');
minus.addEventListener('click', operation);

const multiply = document.querySelector('#multiply');
multiply.addEventListener('click', operation);

const divide = document.querySelector('#divide');
divide.addEventListener('click', operation);

function operation() {
    let stringToAdd = '';
    operators.push(this.id);
    console.log(operators);
    index++;
    switch(this.id) {
        case 'plus':
            stringToAdd = '+';
            break;
        case 'minus':
            stringToAdd = '-';
            break;
        case 'multiply':
            stringToAdd = '*';
            break;
        case 'divide':
            stringToAdd = '/';
            break;
    }
    stringOutput += ' '+ stringToAdd + ' ';
    answer.innerHTML = `${stringOutput}`;
}

const equals = document.querySelector('#equals');
equals.addEventListener('click', solve);

function solve() {
    let computed = 0;
    console.log(cache);
    console.log(operators);
    switch(operators[0]) {
        case 'plus':
            computed += cache[0] + cache[1];
            break;
        case 'minus':
            computed += cache[0] - cache[1];
            break;
        case 'multiply':
            computed += cache[0] * cache[1];
            break;
        case 'divide':
            computed += cache[0] / cache[1];
            break;
    }
    answer.innerHTML = `${computed}`
}

const clear = document.querySelector('#clear');
clear.addEventListener('click', clearAll);

function clearAll() {
    cache = [];
    operators =[];
    index = 0;
    stringOutput = '';
    answer.innerHTML = '';
}