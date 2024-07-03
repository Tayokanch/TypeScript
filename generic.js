"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = [];
var banes = [];
var identityOne = function (val) {
    return val;
};
function identityTwo(val1, val2) {
    return val1;
}
var identityThree = function (myInfo) {
    console.log("This is myInfo: ".concat(myInfo));
    return myInfo;
};
identityTwo("Tayo", 23);
identityThree({ name: "Teni", age: 23 });
