type User = {
    firstName : string,
    lastName: string,
    isActive: boolean
}

//method 1
const allUsers: User [] = []

allUsers.push({firstName: "tayo", lastName: "kanch", isActive: true})
allUsers.push({firstName: "teni", lastName: "makanaki", isActive: false})
allUsers.push({firstName: "eazy", lastName: "balo", isActive: true})

console.log(allUsers);




//method 2
 type position = {
    num: number
 }
const userPosition: Array<position> = []

userPosition.push({num: 3});
userPosition.push({num: 4})



export {}