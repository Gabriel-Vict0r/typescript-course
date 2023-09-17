"use strict";
//1 - campos em classe
class User {
}
const matheus = new User();
console.log(matheus);
matheus.name = 'matheus';
matheus.age = 16;
console.log(matheus);
//2 - constructor
class NewSolder {
    constructor(name, age, sub) {
        this.name = name;
        this.age = age;
        this.sub = sub;
    }
}
const soldierOne = new NewSolder('gabriel', 18, true);
console.log(soldierOne);
//3 - campos com readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const Fusca = new Car('fusca');
console.log(Fusca);
//4 - Herança e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
class KillMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillMachine('Tank', 4);
console.log(destroyer);
//5 - Métodos
class Dwefer {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log(`Hi, my name is ${this.name}`);
    }
}
const jhony = new Dwefer('jhony');
console.log(jhony.greeting());
