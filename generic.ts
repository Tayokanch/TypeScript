
const score : Array <number> = [];
const banes : Array <string> = [];


const identityOne = ( val : boolean | number): boolean | number =>{
    return val
}

function identityTwo  <Type1, Type2>(val1 : Type1 , val2?: Type2): Type1{
    return val1;
}



type Indentity = {
    name: string,
    age: number
}
const identityThree = (myInfo: Indentity) : Indentity =>{
    console.log(`This is myInfo: ${myInfo}`)
    return myInfo;
}


identityTwo("Tayo", 23)

identityThree({name: "Teni", age : 23})


//Common Practise

const identityFour  = <T1, T2> (value1: T1, value2: T2 ) : (T1 | T2) =>{
    return value1 ;
}

identityFour("Leo", "Messi")


interface Team {
    role : string,
    position: string
}

const displayInfo = <Team>(info: Team): Team =>{
    return info
}

displayInfo({role: "full-stack developer", position: "Junior Dev"})

export {}