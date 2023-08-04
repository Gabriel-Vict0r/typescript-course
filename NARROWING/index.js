"use strict";
function sum(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);
    }
    else {
        console.log('Impossível realizar a operação');
    }
}
sum('2', '3');
sum(2, 5);
//2 checando se o valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation === 'sum') {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === 'multiply') {
            const mult = arr.reduce((i, total) => i * total);
            console.log(mult);
        }
        else {
        }
    }
    else {
        console.log('Por favor, defina uma operação');
    }
}
operations([1, 2, 3], 'sum');
operations([1, 2, 3], 'multiply');
//3 - Operador instanceof
class User {
    constructor(name) {
        this.name = name;
    }
}
class Superuser extends User {
    constructor(name) {
        super(name);
    }
}
const gabriel = new User('gabriel');
const jhon = new Superuser('jhon');
function userGreeting(user) {
    if (user instanceof Superuser) {
        console.log(`Olá, ${user.name} dseja ver os dados?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}`);
    }
}
userGreeting(gabriel);
userGreeting(jhon);
//4 - operador in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const turca = new Dog('Turca');
const bob = new Dog('Bob', 'Pastor Alemão');
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`);
    }
    else {
        console.log("O cachorro é um SRD");
    }
}
showDogDetails(turca);
showDogDetails(bob);
