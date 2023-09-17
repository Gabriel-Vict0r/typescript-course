"use strict";
//1 - generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
//2 - constraint em generic
function showProductName(obj) {
    return `O nome do produto é ${obj.name}`;
}
;
const objetoProduto = { name: 'panela', cor: 'branca' };
console.log(showProductName(objetoProduto));
const myCar = {
    name: 'volks',
    wheels: 4,
    engine: 1.0,
    color: 'white'
};
const myPen = {
    name: 'Caneta',
    wheels: false,
    engine: false,
    color: false
};
console.log(myCar);
console.log(myPen);
//4 type parameters
function getSomeKey(obj, key) {
    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'hd'));
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: 'Matheus',
    age: 30,
    hasdriveLicense: true
};
console.log(showCharName(myChar, 'name'));
//6 - typeof type operator
const palavra = 'matheus';
const char = 'teste';
const caminhao = {
    name: 'VW',
    km: 300
};
function showTruck(km) {
    return `${km}`;
}
console.log(showTruck(caminhao.km));
const objeto = 4;
const templateLiteral = 'center';
