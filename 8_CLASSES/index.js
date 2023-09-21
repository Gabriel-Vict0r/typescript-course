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
//6 - getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get greeting() {
        return `${this.name} ${this.surname}`;
    }
}
const gabriel = new Person('gabriel', 'victor');
console.log(gabriel.greeting);
//7 - setters
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
    }
}
const cordenadas = new Coords();
cordenadas.fillX = 15;
cordenadas.fillY = 0;
console.log(cordenadas);
class Book {
    constructor(title) {
        this.title = title;
    }
    showTitle() {
        return `o nome do livro é: ${this.title}`;
    }
}
const livro = new Book('Percy Jackson');
console.log(livro.showTitle());
//10 - override
class Person2 {
    greeting() {
        console.log('show something');
    }
}
class Human extends Person2 {
    greeting() {
        console.log('show the human');
    }
}
const pessoa = new Human();
console.log(pessoa.greeting());
//11 public
class C {
}
class D extends C {
}
const instanceC = new C();
const instanceD = new D();
//12 protect
class F {
    constructor() {
        this.x = 10;
    }
    protectestProtect() {
        console.log('mostrando o protect');
    }
}
class G extends F {
    showProtect() {
        return `o atributo é ${this.x}`;
    }
    showMethod() {
        return this.protectestProtect();
    }
}
const instanceG = new G();
console.log(instanceG.showProtect());
console.log(instanceG.showMethod());
//13 private
class K {
    constructor() {
        this.teste = 'private';
    }
    showPrivate() {
        return this.teste;
    }
    testMethod() {
        console.log('private method');
    }
    showMethodPrivate() {
        this.testMethod();
    }
}
const testePrivate = new K();
console.log(testePrivate.showPrivate());
console.log(testePrivate.showMethodPrivate());
//14 - static members
class Static {
}
Static.atributeStatic = 'estático';
console.log(Static.atributeStatic);
//15 - generic class
class Generic {
    constructor(first, second, tird) {
        this.first = first;
        this.second = second;
        this.tird = tird;
    }
    showPresentation() {
        return `${this.first} ${this.second} ${this.tird}`;
    }
}
const generic = new Generic('caixa', 'de', 'mistério');
console.log(generic.showPresentation());
//16 - parameters properties
class ParameterProperties {
    constructor(product, qtd, price) {
        this.product = product;
        this.qtd = qtd;
        this.price = price;
        this.product = product;
        this.qtd = qtd;
        this.price = price;
    }
    get showQtd() {
        return this.qtd;
    }
    get showPrice() {
        return this.price;
    }
}
const shirt = new ParameterProperties('camisa', 15, 14.99);
console.log(shirt);
const classExpression = class {
    constructor(name) {
        this.name = name;
    }
};
const expressao = new classExpression('Class expression');
console.log(expressao);
class Abstrata {
}
class ShowAbs extends Abstrata {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        return this.name;
    }
}
const abstrato = new ShowAbs('abstrair');
console.log(abstrato);
