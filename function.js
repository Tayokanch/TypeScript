"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var addTwo = function (num) {
    return num + 2;
};
addTwo(4);
var ConvertToUpper = function (value) {
    console.log(value.toUpperCase());
    return value.toUpperCase();
};
ConvertToUpper("omotayo");
var signUpUser = function (name, email, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return { name: name, email: email, password: password, isPaid: isPaid };
};
signUpUser("tayo", "tayo@gmail.com", "tayo1234");
