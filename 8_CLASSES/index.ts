//1 - campos em classe

class User {
    name!: string
    age!: number
}

const matheus = new User()
console.log(matheus)
matheus.name = 'matheus'
matheus.age = 16
console.log(matheus)

//2 - constructor

class NewSolder {
    name
    age
    sub
    constructor(name: string, age: number, sub: boolean) {
        this.name = name
        this.age = age;
        this.sub = sub
    }
}

const soldierOne = new NewSolder('gabriel', 18, true)
console.log(soldierOne)

//3 - campos com readonly
class Car {
    name
    readonly wheels = 4;
    constructor(name: string) {
        this.name = name
    }
}
const Fusca = new Car('fusca')
console.log(Fusca);

//4 - Herança e super

class Machine {
    name
    constructor(name: string) {
        this.name = name
    }
}
class KillMachine extends Machine {
    guns
    constructor(name: string, guns: number) {
        super(name);
        this.guns = guns
    }
}
const destroyer = new KillMachine('Tank', 4);
console.log(destroyer);

//5 - Métodos

class Dwefer {
    name
    constructor(name: string) {
        this.name = name
    }
    greeting() {
        console.log(`Hi, my name is ${this.name}`)
    }
}
const jhony = new Dwefer('jhony')
console.log(jhony.greeting());

//6 - getters

class Person {
    name
    surname
    constructor(name: string, surname: string) {
        this.name = name
        this.surname = surname
    }
    get greeting() {
        return `${this.name} ${this.surname}`;
    }
}
const gabriel = new Person('gabriel', 'victor');
console.log(gabriel.greeting)

//7 - setters

class Coords {
    x!: number
    y!: number

    set fillX(x: number) {
        if (x === 0) {
            return
        }
        this.x = x
    }

    set fillY(y: number) {
        if (y === 0) {
            return
        }
        this.y = y
    }
}
const cordenadas = new Coords()
cordenadas.fillX = 15;
cordenadas.fillY = 0;
console.log(cordenadas)

//8 - implements
interface ShowTitle {
    showTitle(): string
}
class Book implements ShowTitle {
    title
    constructor(title: string) {
        this.title = title;
    }
    showTitle() {
        return `o nome do livro é: ${this.title}`
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
    greeting(): void {
        console.log('show the human')
    }
}
const pessoa = new Human();
console.log(pessoa.greeting());

//11 public
class C {
    public c!: string
}
class D extends C {
    public d!: string;
}
const instanceC = new C();
const instanceD = new D();

//12 protect
class F {
    protected x: number = 10;
    protected protectestProtect() {
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
    private teste = 'private';
    showPrivate() {
        return this.teste
    }
    private testMethod() {
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
    static atributeStatic: string = 'estático'
}
console.log(Static.atributeStatic);

//15 - generic class

class Generic<T, U, G> {
    first
    second
    tird
    constructor(first: T, second: U, tird: G) {
        this.first = first
        this.second = second
        this.tird = tird
    }
    showPresentation() {
        return `${this.first} ${this.second} ${this.tird}`
    }
}
const generic = new Generic('caixa', 'de', 'mistério')
console.log(generic.showPresentation());

//16 - parameters properties
class ParameterProperties {
    [x: string]: any
    constructor(public product: string, private qtd: number, private price: number) {
        this.product = product;
        this.qtd = qtd;
        this.price = price;
    }
    get showQtd() {
        return this.qtd
    }
    get showPrice() {
        return this.price;
    }
}
const shirt = new ParameterProperties('camisa', 15, 14.99);
console.log(shirt);

const classExpression = class <T> {
    name
    constructor(name: T) {
        this.name = name
    }
}
const expressao = new classExpression('Class expression')
console.log(expressao);

abstract class Abstrata {
    abstract showName(): string
}

class ShowAbs extends Abstrata{
    name
    constructor(name: string) {
        super()
        this.name = name
    }
    showName(): string {
        return this.name
    }
}
const abstrato = new ShowAbs('abstrair')
console.log(abstrato);
