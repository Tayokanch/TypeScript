"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
    }
    return User;
}());
var firstUser = new User("tayokanch@gmail.com", "Tayo");
console.log(firstUser);
// Another Method
var Profile = /** @class */ (function () {
    function Profile(name, country, club) {
        this.name = name;
        this.country = country;
        this.club = club;
    }
    return Profile;
}());
var player1 = new Profile("Pedri", "Spain", "Barcelona");
var player2 = new Profile("Halland", "Norway", "Manchester City");
