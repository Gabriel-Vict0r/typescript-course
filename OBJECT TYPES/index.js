"use strict";
function showProductDetails(product) {
    return `nome: ${product.name}\nprice: ${product.price}\nEstá disponível: ${product.isAvailable}`;
}
console.log(showProductDetails({ name: 'gabriel', price: 45, isAvailable: true }));
const camisa = {
    name: "camisa",
    price: 19.45,
    isAvailable: false
};
console.log(showProductDetails(camisa));
