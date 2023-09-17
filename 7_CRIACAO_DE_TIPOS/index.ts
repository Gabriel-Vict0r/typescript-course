//1 - generics

function showData<T>(arg: T): string {
    return `O dado é: ${arg}`
}

console.log(showData(5))

//2 - constraint em generic
function showProductName<T extends { name: string }>(obj: T) {
    return `O nome do produto é ${obj.name}`
};
const objetoProduto = { name: 'panela', cor: 'branca' }

console.log(showProductName(objetoProduto))

//3 - Generics com interface
interface MyObject<T, U, Q> {
    name: string
    wheels: T
    engine: U
    color: Q
}

type Car = MyObject<number, number, string | boolean>
type Pen = MyObject<boolean, boolean, string | boolean>

const myCar: Car = {
    name: 'volks',
    wheels: 4,
    engine: 1.0,
    color: 'white'
}
const myPen: Pen = {
    name: 'Caneta',
    wheels: false,
    engine: false,
    color: false
}
console.log(myCar)
console.log(myPen)

//4 type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
    hd: '2TB',
    ram: '32GB'
}
console.log(getSomeKey(server, 'hd'));
console.log(getSomeKey(server, 'ram'));

//5 - keyof type operator
type Character = { name: string, age: number, hasdriveLicense: boolean }
type C = keyof Character

function showCharName(obj: Character, name: C) {
    return `${obj[name]}`
}
const myChar: Character = {
    name: 'Matheus',
    age: 30,
    hasdriveLicense: true
}
console.log(showCharName(myChar, 'name'))

//6 - typeof type operator
const palavra: string = 'matheus';

const char: typeof palavra = 'teste';
type section = typeof palavra;

//7 - indexed access types
type Objeto = { name: string, km: number }
type km = Objeto['km']

const caminhao: Objeto = {
    name: 'VW',
    km: 300
}

function showTruck(km: km) {
    return `${km}`
}
console.log(showTruck(caminhao.km))

// 8 - condicional expressions type
interface InterfaceA { }
interface InterfaceB  extends InterfaceA{ }

type teste04 = InterfaceB extends InterfaceA ? number : string

const objeto: teste04 = 4

//9 - template literals type
type Palavra1 = 'center'
type Palavra2 = 'top'
type Compose = `${Palavra1}` | `${Palavra2}`;

const templateLiteral: Compose = 'center'