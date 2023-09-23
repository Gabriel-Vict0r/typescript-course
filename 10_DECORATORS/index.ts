//1 - first decorator
function myDecorator() {
    console.log("Iniciando o decorator");

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('executando o decorator');
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    }
}

class Myclass {
    @myDecorator()
    testing() {
        console.log('finalizando o decorator');
    }
}

//2 - multiplos decorators
function a() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('executando decorator a');
    }
}
function b() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('executando decorator b');
    }
}
class MultiplyDecorator {
    @a()
    @b()
    testing() {
        console.log('executando ordens');
    }
}

//4 - decorator de classe

function showDecorator(constructor: Function) {
    console.log(constructor.name);
}

@showDecorator
class ShowName {
    name
    constructor(name: string) {
        this.name = name
    }
}
const user = new ShowName('gabriel');
console.log(user);
