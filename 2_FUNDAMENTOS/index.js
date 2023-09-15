"use strict";
let x = 10;
console.log(typeof x);
const y = 15.0340;
console.log(typeof y);
console.log((3));
const firstName = 'gabriel';
console.log(firstName.toUpperCase());
let fullName;
const lastName = 'Victor';
fullName = `${firstName} ${lastName}`;
console.log(fullName);
//3 - boolean
let a = false;
console.log(a);
console.log(typeof a);
//4 - type inference and annotation
const ann = 'teste';
let infe = 'teste';
console.log(ann);
//desafio
const number = 10;
function convert(number) {
    let newVar = number.toString();
    console.log(`Número recebido: ${newVar}`);
}
convert(number);
const list = [0, 2, 3, 40];
