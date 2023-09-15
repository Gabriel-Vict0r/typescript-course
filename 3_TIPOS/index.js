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
    console.log('c: ' + b);
}
showNumbers(2, 3, 4);
//9 validando argumento opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting('gabriel', 'victor'));
console.log(advancedGreeting('gabriel'));
//10 - union types
function showBalance(balance) {
    return `O saldo da conta é R$${balance}`;
}
console.log(showBalance(500));
console.log(showBalance('500'));
const Arr = [10, 'gabriel', true];
// 11 - avançando em union types
function showUserRole(role) {
    if (typeof role === 'boolean') {
        return "Usuário não aprovado!";
    }
    else {
        return `a função do usuário é ${role}`;
    }
}
console.log(showUserRole(false));
console.log(showUserRole('programador'));
function showId(id) {
    console.log(`O id é: ${id}`);
}
showId(1234);
showId('24ask2');
showId('123');
function showCoords(obj) {
    return `x: ${obj.x}, y: ${obj.y} e z: ${obj.z}`;
}
const coordObj = {
    x: 10,
    y: 5,
    z: 25
};
console.log(showCoords(coordObj));
const pessoa = {
    name: 'gabriel',
    age: 18
};
console.log(pessoa);
//15 - literal types
let test;
test = 'testando';
console.log(test);
function showDirection(direction) {
    console.log(`A direção é ${direction}`);
}
showDirection('left');
//16 - non null assertion operators
const p = document.getElementById('some-p');
console.log(p.innerText);
//17 - bigint
let n;
n = 1000n;
console.log(n + 100n);
//Symbol
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA === symbolB);
console.log(symbolA == symbolB);
