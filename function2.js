"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//The functions takes 2 parameter of type number and strictly returns number 
var multiplyNumbers = function (num1, num2) {
    return num1 * num2;
};
multiplyNumbers(3, 4);
var getHello = function (s) {
    return s;
};
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    console.log("".concat(hero, " is the hero "));
});
