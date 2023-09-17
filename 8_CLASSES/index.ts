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