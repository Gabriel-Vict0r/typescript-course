let x: number = 10


console.log(typeof x);

const y: number = 15.0340

console.log(typeof y)
console.log((3))

const firstName: string = 'gabriel'
console.log(firstName.toUpperCase())
let fullName: string

const lastName: string = 'Victor'

fullName = `${firstName} ${lastName}`
console.log(fullName)

//3 - boolean
let a: boolean = false
console.log(a)
console.log(typeof a)

//4 - type inference and annotation
const ann: string = 'teste';

let infe = 'teste';


console.log(ann)

//desafio

const number = 10
function convert(number: number) {
    let newVar: string = number.toString();
    console.log(`Número recebido: ${newVar}`)
}
convert(number)

const list: number[] = [0, 2, 3, 40];