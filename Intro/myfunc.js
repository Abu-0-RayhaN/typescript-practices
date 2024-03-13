"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toLocaleUpperCase();
}
function signUpUser(name, email, isPaid) {
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return name;
};
loginUser("h", "h@amd.com");
signUpUser("rayhan", "rayhan@.com", false);
function getValue(myVal) {
    if (myVal > 5) {
        return 6;
    }
    return "nothing wrong with it";
}
var getV = function (myValue) { return myValue > 5 ? 3 : "noting wrong with it"; };
var getHello = function (s) { return ""; };
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errormsg) {
    console.log(errormsg);
}
function HandleError(errormsg) {
    throw new Error(errormsg);
}
