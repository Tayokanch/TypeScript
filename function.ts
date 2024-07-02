const addTwo = (num: number )=>{
    return num + 2
}
addTwo(4);


const ConvertToUpper = (value :string)=>{
    console.log(value.toUpperCase());
    return value.toUpperCase();
}
ConvertToUpper("omotayo")

const signUpUser =(name : string, email : string, password: string, isPaid: boolean = false)=>{
    return {name, email, password, isPaid}
}
signUpUser("tayo", "tayo@gmail.com", "tayo1234" )

export {}