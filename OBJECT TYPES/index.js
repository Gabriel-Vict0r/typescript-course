"use strict";
function showProductDetails(product) {
    return `nome: ${product.name}\nprice: ${product.price}\nEstá disponível: ${product.isAvailable}`;
}
console.log(showProductDetails({ name: 'gabriel', price: 45, isAvailable: true }));
const camisa = {
    name: "camisa",
    price: 19.45,
    isAvailable: false
};
console.log(showProductDetails(camisa));
const showUserDetail = (user) => {
    console.log(`O usuário é ${user.email}`);
    if (user.role) {
        console.log(`O papel dele é ${user.role}`);
    }
};
const userOne = {
    email: 'victorgabriel1730@gmail.com',
    role: 'dev'
};
const userTwo = {
    email: 'testeteste'
};
showUserDetail(userOne);
showUserDetail(userTwo);
const Fusca = {
    brand: 'VW',
    wheels: 4
};
console.log(Fusca);
const coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const matheus = {
    name: 'matheus',
    age: 18
};
const gabriel = {
    name: 'gabriel',
    age: 18,
    superpowers: ['fly', 'strong super']
};
console.log(matheus);
console.log(gabriel);
const Rambo = {
    name: 'rambo',
    type: 'AK 47',
    caliber: 40
};
console.log(Rambo);
//Read Only Array
let myArr = ['maçã', 'laranja', 'banana'];
//myArr[3] = 'mamão'
console.log(myArr);
myArr.forEach((element) => {
    console.log(element);
});
let myArray = myArr.map((element) => {
    return `Fruta: ${element}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
const myNumberArray2 = [1, 2, 3, 4, 5];
console.log(myNumberArray);
const anotherUser = ['gabriel', 15];
console.log(anotherUser);
anotherUser[0] = 'joão';
console.log(anotherUser);
//Tuplas com readonly
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
