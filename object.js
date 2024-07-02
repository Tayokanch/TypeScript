"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "tayo",
    email: "tayo@gmail.com",
    isActive: true
};
var createUser = function (person) {
    console.log("The user is ".concat(person.name));
    console.log("Has the user paid? ".concat(person.isPaid));
};
createUser({ name: "tayo", isPaid: true });
// This function takes in type of userInfo as a paramter and return type of UserInfo
var getUserInfo = function (user) {
    return { firstName: "omotayo", lastName: "Kanch", age: 49, status: "single" };
};
getUserInfo({ firstName: "omotayo", lastName: "Kanch", age: 49, status: "single" });
var newUser = {
    _id: 'o13093qwlkqwklop',
    name: "eazy",
    email: "eazy@gmail.com",
    isActive: true
};
var newDetails = {
    cardnumber: "48894834843834",
    cardDate: "12/07/1298",
    cvv: 876
};
console.log(newDetails);
