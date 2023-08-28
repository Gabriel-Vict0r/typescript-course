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