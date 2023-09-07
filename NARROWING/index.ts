type numbers = number | string
function sum(a: numbers, b: numbers) {
    if (typeof a === 'string' && typeof b === 'string') {
        console.log(parseFloat(a) + parseFloat(b))
    } else if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b)
    } else {
        console.log('Impossível realizar a operação')
    }
}
sum('2', '3')
sum(2, 5)

//2 checando se o valor existe
function operations(arr: number[], operation: string | undefined) {
    if (operation) {
        if (operation === 'sum') {
            const sum = arr.reduce((i, total) => i + total)
            console.log(sum)
        } else if (operation === 'multiply') {
            const mult = arr.reduce((i, total) => i * total)
            console.log(mult)
        }
        else {

        }
    } else {
        console.log('Por favor, defina uma operação')
    }
}
operations([1, 2, 3], 'sum')
operations([1, 2, 3], 'multiply')

//3 - Operador instanceof
class User {
    name
    constructor(name: string) {
        this.name = name
    }
}
class Superuser extends User {
    constructor(name: string) {
        super(name)
    }
}

const gabriel = new User('gabriel')
const jhon = new Superuser('jhon')

function userGreeting(user: object) {
    if (user instanceof Superuser) {
        console.log(`Olá, ${user.name} dseja ver os dados?`)
    } else if (user instanceof User) {
        console.log(`Olá ${user.name}`)
    }
}

userGreeting(gabriel)
userGreeting(jhon)

//4 - operador in
class Dog {
    name
    breed

    constructor(name: string, breed?: string) {
        this.name = name
        if (breed) {
            this.breed = breed
        }
    }
}

const turca = new Dog('Turca')
const bob = new Dog('Bob', 'Pastor Alemão')

function showDogDetails(dog: Dog) {
    if ('breed' in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`)
    } else {
        console.log("O cachorro é um SRD")
    }
}
showDogDetails(turca)
showDogDetails(bob)

//desafio 03

function reviews(star: number | boolean) {
    if (typeof star === 'boolean') {
        return 'Please, send us a valid number'
    } else if (typeof star === 'number') {
        if (star === 1) {
            return 'review: bad'
        } else if (star === 2) {
            return 'review: moderate'
        } else if (star === 3) {
            return 'review: good'
        } else if (star === 4) {
            return 'review: very good'
        } else {
            return 'review: Excelent!!!'
        }
    }
}
console.log(reviews(1))
console.log(reviews(2))
console.log(reviews(3))
console.log(reviews(4))
console.log(reviews(5))
console.log(reviews(false))
