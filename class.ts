class User{
    email: string
    name: string
    constructor(email : string, name : string){
        this.email = email
        this.name = name
    }
}

const firstUser = new User( "tayokanch@gmail.com",  "Tayo")
console.log(firstUser);


// Another Method to write class

class Profile {
    constructor(public name: string, public country : string, public club : string){

    }
}

const player1 = new Profile("Pedri", "Spain", "Barcelona")
const player2 = new Profile("Halland", "Norway", "Manchester City")


export {}