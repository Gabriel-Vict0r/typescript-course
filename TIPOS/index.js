"use strict";
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers);
const nomes = ['matheus', 'joão'];
//outra sintaxe array
const nums = [100, 200];
nums.push(300);
console.log(nums);
//3 any
const arr = [1, 'teste', 'hello', []];
arr.push(true);
console.log(arr);
//tipo de parâmetro de funções
function Apresentation(name, age) {
    console.log(`Meu nome é ${name}\nidade: ${age}`);
}
Apresentation('gabriel', 20);
//tipo de retorno
function saudacao(name) {
    return `Olá ${name}`;
}
console.log(saudacao('gabriel'));
//funções anônimas
setTimeout(() => {
    const sallary = 1000;
    //console.log(parseFloat(sallary))
    //console.log(sallary)
}, 2000);
// 7 - tipos de objeto
function passCoordinates(coord) {
    console.log('X coordinates: ' + coord.x);
    console.log('Y coordinates: ' + coord.y);
}
const objCoord = { x: 329, y: 84.9 };
passCoordinates(objCoord);
//passCoordinates({y: 12, y: 5})
//8 - opcionais
function showNumbers(a, b, c) {
    console.log('a: ' + a);
    console.log('b: ' + b);
}
showNumbers(2, 3);
