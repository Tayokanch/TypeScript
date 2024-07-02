//The functions takes 2 parameter of type number and strictly returns number 
const multiplyNumbers = (num1: number, num2: number): number =>{
    return num1 * num2;
}

multiplyNumbers(3, 4);


const getHello = (s: string): string =>{
    return s
}

const heros = ["thor", "spiderman", "ironman"];

heros.map((hero)=>{
    console.log(`${hero} is the hero `)
})


//function that doesn't return anything

const consoleError =(errMsg: string) : void=>{
    console.log(`The error is ${errMsg}`)
}

const handleError = (error: string) : never =>{
    throw new Error (error);
}
export {}
