"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//1 - first decorator
function myDecorator() {
    console.log("Iniciando o decorator");
    return function (target, propertyKey, descriptor) {
        console.log('executando o decorator');
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
class Myclass {
    testing() {
        console.log('finalizando o decorator');
    }
}
__decorate([
    myDecorator()
], Myclass.prototype, "testing", null);
//2 - multiplos decorators
function a() {
    return function (target, propertyKey, descriptor) {
        console.log('executando decorator a');
    };
}
function b() {
    return function (target, propertyKey, descriptor) {
        console.log('executando decorator b');
    };
}
class MultiplyDecorator {
    testing() {
        console.log('executando ordens');
    }
}
__decorate([
    a(),
    b()
], MultiplyDecorator.prototype, "testing", null);
//4 - decorator de classe
function showDecorator(constructor) {
    console.log(constructor.name);
}
let ShowName = class ShowName {
    name;
    constructor(name) {
        this.name = name;
    }
};
ShowName = __decorate([
    showDecorator
], ShowName);
const user = new ShowName('gabriel');
console.log(user);
//4 - method decorators
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    name;
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `O nome é: ${this.name}`;
    }
}
__decorate([
    enumerable(true)
], Machine.prototype, "showName", null);
const trator = new Machine('trator');
console.log(trator.showName());
//5 - acessor decorator
class Monster {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return this.name;
    }
    get showAge() {
        return this.age;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(false)
], Monster.prototype, "showAge", null);
const charizard = new Monster('charizard', 209);
console.log(charizard);
function changeId() {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, '0');
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        });
    };
}
class Id {
    id;
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    changeId()
], Id.prototype, "id", void 0);
const id = new Id(1);
console.log(id);
//exemplo real com class decorator
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    id;
    createdAt;
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen = class Pen {
    id;
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdDate
], Pen);
const book = new Book(12);
const pen = new Pen(12);
console.log(book.createdAt);
console.log(pen);
// 8 - method decorator
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        const chieldFunction = descriptor.value;
        console.log(chieldFunction);
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log('Usuário já postou!');
                return null;
            }
            else {
                return chieldFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    alreadyPosted = false;
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do usuário: ${content}`);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post('Meu primeiro post', newPost.alreadyPosted);
newPost.post('Meu primeiro post', newPost.alreadyPosted);
//9 - exemplo real com propery decorator
function Max(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log(`O valor deve ter no máximo ${limit} digitos.`);
            }
            else {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
class Admin {
    username;
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    Max(10)
], Admin.prototype, "username", void 0);
const pedro = new Admin('gabriel023422123123434');
console.log(pedro);
