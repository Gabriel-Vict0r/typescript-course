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

//4 - method decorators
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value
    }
}
class Machine {
    name
    constructor(name: string) {
        this.name = name
    }
    @enumerable(true)
    showName() {
        console.log(this);
        return `O nome é: ${this.name}`
    }
}
const trator = new Machine('trator')
console.log(trator.showName());

//5 - acessor decorator
class Monster {
    name?
    age?
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    @enumerable(true)
    get showName() {
        return this.name
    }
    @enumerable(false)
    get showAge() {
        return this.age
    }
}
const charizard = new Monster('charizard', 209);
console.log(charizard);

function changeId() {
    return function (target: Object, propertyKey: string) {
        let value: string

        const getter = function () {
            return value
        }
        const setter = function (newVal: string) {
            value = newVal.padStart(5, '0');
        }
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        })
    }
}
class Id {
    @changeId()
    id
    constructor(id: number) {
        this.id = id
    }

}
const id = new Id(1);
console.log(id);

//exemplo real com class decorator

function createdDate(created: Function) {
    created.prototype.createdAt = new Date();
}
@createdDate
class Book {
    id
    createdAt?: Date;
    constructor(id: number) {
        this.id = id
    }
}
@createdDate
class Pen {
    id
    constructor(id: number) {
        this.id = id
    }
}
const book = new Book(12);
const pen = new Pen(12);
console.log(book.createdAt);
console.log(pen);

// 8 - method decorator
function checkIfUserPosted() {
    return function (target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
        const chieldFunction = descriptor.value;
        console.log(chieldFunction);
        descriptor.value = function (...args: any[]) {
            if (args[1] === true) {
                console.log('Usuário já postou!');
                return null
            } else {
                return chieldFunction.apply(this, args);
            }
        }
        return descriptor
    }
}
class Post {
    alreadyPosted = false
    @checkIfUserPosted()
    post(content: string, alreadyPosted: boolean) {
        this.alreadyPosted = true
        console.log(`Post do usuário: ${content}`);
    }
}
const newPost = new Post();
newPost.post('Meu primeiro post', newPost.alreadyPosted);
newPost.post('Meu primeiro post', newPost.alreadyPosted);