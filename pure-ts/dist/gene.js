"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(true);
function identityFour(val) {
    return val;
}
// identityFour<Bottle>({})
function setSearchProducts(products) {
    return products[0];
}
const getMoreSearchProducts = (products) => {
    return products;
};
function anohterFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anohterFunction(3, { connection: 'as', username: 'ag', password: 'asg' });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
