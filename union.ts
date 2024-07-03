let score : number | string  = 23;


type User = {
    name: string,
    id: number,

}

type Admin = {
    username : string,
    id: number
}

let tayo : User | Admin = {
    name: "tayo",
    id: 94399390,
    username:"tayoAdmin"
}

const getId = (id: number | string)=>{
    if(typeof id === "string"){
        id.toUpperCase()
    }
    else if (typeof id === "number"){
        id + 2
    }
  
}

const data : (number | string ) [] = [1, 4, "tayo", 34, "Teni"]
console.log(data[3]);

export {}