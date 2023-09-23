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
    constructor(name) {
        this.name = name;
    }
};
ShowName = __decorate([
    showDecorator
], ShowName);
const user = new ShowName('gabriel');
console.log(user);
