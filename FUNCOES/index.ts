//1 - void

function withoutReturn(): void {
    console.log("Esta função não tem retorno!")
}

//callback como argumento

function greeting(name: string): string {
    return `Olá ${name}`
}

function preGreeting(f: (name: string) => string, userName: string) {

    console.log("Preparando a função!")
    const greet = f(userName)
    console.log(greet)
}
preGreeting(greeting, 'gabriel')

// 3 - generic functions
function firstElement<T>(arr: T[]): T {
    return arr[0]
}

console.log(firstElement([1, 2, 3, 4]))
console.log(firstElement([true, false]))
console.log(firstElement(['a', 'b', 'c']))

const mergeObjects = <U, T>(obj1: U, obj2: T) => {
    return {
        ...obj1,
        ...obj2,
    }
}
const newObjct = mergeObjects({ name: 'gabriel' }, { age: '31', job: 'programmer' })
console.log(newObjct)

//4 - constraints
function biggestNumber<T extends number | string>(a: T, b: T): T {
    let biggest: T;
    if (+a > +b) {
        biggest = a
    } else {
        biggest = b
    }
    return biggest;
}
console.log(biggestNumber(5, 3))
console.log(biggestNumber(5, 9))
console.log(biggestNumber('12', '5'))
console.log(biggestNumber('12', '5'))

//5 - especificar os tipos de argumentos
function mergeArrays<T>(arr1: T[], arr2: T[]) {
    return arr1.concat(arr2)
}
const arr1 = [2, 3, 4]
const arr2 = ['5, 4, 1']
console.log(mergeArrays<number | string>(arr1, arr2))

//6 - parâmetros opcionais
function modernGreeting(name: string, greet?: string) {
    if (greet) {
        return `Olá ${name} ${greet}`
    }
    else {
        return `Olá ${name} tudo bem?`
    }
}
console.log(modernGreeting('gabriel', 'tudo bem?'));
console.log(modernGreeting('gabriel'));

//7 - parâmetros default
function somaDefault(n: number, m = 10) {
    return n + m
}
console.log(somaDefault(10, 20))

// 8 - unkown

function doSomething(x: unknown) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
}
doSomething('1')
doSomething([2, 3, 4])

//9 - never

const showErrorMessage = (msg: string): never => {
    throw new Error(msg);
}
//showErrorMessage('algum erro')