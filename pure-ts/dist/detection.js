"use strict";
function detectType(val) {
    if (typeof val == "string") {
        return val.toLocaleLowerCase();
    }
    return val + 4;
}
function provideId(id) {
    if (!id) {
        console.log("please provide ID");
        return;
    }
    id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === 'string') {
            console.log(strs);
        }
    }
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return false;
}
new Date();
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    return shape.side ** 2;
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "squre":
            return shape.side ** 2;
        default:
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
