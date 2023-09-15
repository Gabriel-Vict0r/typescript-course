let numbers: number[] = [1, 2, 3]

numbers.push(5)
console.log(numbers)

const nomes: string[] = ['matheus', 'joão']

//outra sintaxe array

const nums: Array<number> = [100, 200]

nums.push(300)
console.log(nums);

//3 any

const arr: any = [1, 'teste', 'hello', []]

arr.push(true)
console.log(arr)

//tipo de parâmetro de funções
function Apresentation(name: string, age: number): any {
    console.log(`Meu nome é ${name}\nidade: ${age}`)
}
Apresentation('gabriel', 20)

//tipo de retorno
function saudacao(name: string): string {
    return `Olá ${name}`
}
console.log(saudacao('gabriel'))

//funções anônimas
setTimeout(() => {
    const sallary: number = 1000
    //console.log(parseFloat(sallary))
    //console.log(sallary)
}, 2000);

// 7 - tipos de objeto
function passCoordinates(coord: { y: number, x: number }) {
    console.log('X coordinates: ' + coord.x)
    console.log('Y coordinates: ' + coord.y)
}

const objCoord = { x: 329, y: 84.9 }
passCoordinates(objCoord)
//passCoordinates({y: 12, y: 5})

//8 - opcionais
function showNumbers(a: number, b: number, c?: number) {
    console.log('a: ' + a)
    console.log('b: ' + b)
    console.log('c: ' + b)
}

showNumbers(2, 3, 4)

//9 validando argumento opcional

function advancedGreeting(firstName?: string, lastName?: string) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`
    }
    return `Olá, ${firstName}, tudo bem?`
}
console.log(advancedGreeting('gabriel', 'victor'))
console.log(advancedGreeting('gabriel'))

//10 - union types

function showBalance(balance: string | number) {
    return `O saldo da conta é R$${balance}`
}
console.log(showBalance(500))
console.log(showBalance('500'))

const Arr: Array<string | number | boolean> = [10, 'gabriel', true]

// 11 - avançando em union types

function showUserRole(role: boolean | string) {
    if (typeof role === 'boolean') {
        return "Usuário não aprovado!"
    }
    else {
        return `a função do usuário é ${role}`
    }
}
console.log(showUserRole(false))
console.log(showUserRole('programador'))

// 12 - type alias
type ID = string | number
function showId(id: ID) {
    console.log(`O id é: ${id}`)
}
showId(1234)
showId('24ask2')
showId('123')

//13 - interface

interface Point {
    x: number
    y: number
    z: number
}
function showCoords(obj: Point) {
    return `x: ${obj.x}, y: ${obj.y} e z: ${obj.z}`
}

const coordObj: Point = {
    x: 10,
    y: 5,
    z: 25
}
console.log(showCoords(coordObj))

//14 - interface x alias type

interface Person {
    name: string
}

interface Person {
    age: number
}
const pessoa: Person = {
    name: 'gabriel',
    age: 18
}
console.log(pessoa)

type Another = {
    first: number
}

//15 - literal types
let test: 'testando'

test = 'testando'
console.log(test)

function showDirection(direction: "left" | "right" | "center") {
    console.log(`A direção é ${direction}`)
}
showDirection('left')

//16 - non null assertion operators
const p = document.getElementById('some-p')
console.log(p!.innerText)

//17 - bigint

let n: bigint
n = 1000n

console.log(n + 100n)

//Symbol
let symbolA: symbol = Symbol("a")
let symbolB: symbol = Symbol("a")

console.log(symbolA === symbolB)
console.log(symbolA == symbolB)