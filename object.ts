const user = {
    name : "tayo",
    email: "tayo@gmail.com",
    isActive: true
}

type User = {
    name : string,
    isPaid : boolean
}


const createUser = (person: User) =>{
    console.log(`The user is ${person.name}`)
    console.log(`Has the user paid? ${person.isPaid}`)
}


createUser({name: "tayo", isPaid: true});


type UserInfo = {
    firstName: string,
    lastName : string,
    age: number,
    status: string
}

// This function takes in type of userInfo as a paramter and return type of UserInfo

const getUserInfo = (user: UserInfo) : UserInfo=>{
    return{ firstName: "omotayo", lastName: "Kanch", age: 49, status : "single"};
}

getUserInfo({ firstName: "omotayo", lastName: "Kanch", age: 49, status : "single"})




//Read only
type InitailUser = {
   readonly _id: string
    name : string,
    email: string,
    isActive: boolean
}

let newUser : InitailUser = {
    _id : 'o13093qwlkqwklop',
    name : "eazy",
    email: "eazy@gmail.com",
    isActive: true

}


//Type Combination

type cardNumber  = {
    cardnumber : string
};

type cardDate = {
    cardDate: string
};

type cardDetails = cardNumber & cardDate & {
    cvv : number
};

const newDetails : cardDetails = {
    cardnumber: "48894834843834",
    cardDate: "12/07/1298",
    cvv: 876
}

console.log(newDetails)





export {}