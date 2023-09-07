//Tipo de objeto para função com interface
interface Product {
    name: string
    price: number
    isAvailable: boolean
}

function showProductDetails(product: Product) {
    return `nome: ${product.name}\nprice: ${product.price}\nEstá disponível: ${product.isAvailable}`
}
console.log(showProductDetails({ name: 'gabriel', price: 45, isAvailable: true }))


const camisa: Product = {
    name: "camisa",
    price: 19.45,
    isAvailable: false
}
console.log(showProductDetails(camisa))

//Propriedade opcional em interface
interface User {
    email: string,
    role?: string
}

const showUserDetail = (user: User) => {
    console.log(`O usuário é ${user.email}`);
    if (user.role) {
        console.log(`O papel dele é ${user.role}`)
    }
}
const userOne: User = {
    email: 'victorgabriel1730@gmail.com',
    role: 'dev'
}
const userTwo: User = {
    email: 'testeteste'
}
showUserDetail(userOne)
showUserDetail(userTwo)

//3 - readonly
interface Car {
    brand: string,
    readonly wheels: number,
}
const Fusca: Car = {
    brand: 'VW',
    wheels: 4
}
console.log(Fusca)

//5 - index signature

interface CoordObject {
    [index: string]: number
}

const coords: CoordObject = {
    x: 10
}

coords.y = 15
console.log(coords)

//6 - exteding type
interface Human {
    name: string,
    age: number,
}

interface SuperMan extends Human {
    superpowers: string[]
}

const matheus: Human = {
    name: 'matheus',
    age: 18
}
const gabriel: SuperMan = {
    name: 'gabriel',
    age: 18,
    superpowers: ['fly', 'strong super']
}
console.log(matheus)
console.log(gabriel)

//intersection types
interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}
type HumanWithGun = Character & Gun

const Rambo: HumanWithGun = {
    name: 'rambo',
    type: 'AK 47',
    caliber: 40
}
console.log(Rambo)

//Read Only Array

let myArr: ReadonlyArray<string>= ['maçã', 'laranja', 'banana']

//myArr[3] = 'mamão'
console.log(myArr)

myArr.forEach((element) => {
    console.log(element)
})

let myArray = myArr.map((element) => {
    return `Fruta: ${element}`
})

console.log(myArray)

//Tuplas
type fiveNumbers = [number, number, number, number, number]
const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]
const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5]
console.log(myNumberArray);

type nameAndAge = [string, number]
const anotherUser: nameAndAge = ['gabriel', 15]
console.log(anotherUser)
anotherUser[0] = 'joão'
console.log(anotherUser)

//Tuplas com readonly
function showNumbers(numbers: readonly [number, number]) {
    console.log(numbers[0])
    console.log(numbers[1])
}
showNumbers([1, 2])