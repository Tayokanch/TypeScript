interface myUser {
    readonly dbId: number
    email: string,
    userId: number,
    googleId? : string
    startTrail (): string
    getCoupon(couponname: string): number
}

//Reopening Interface

interface myUser {
    gitHubToken: string
}

//Extend Keyword

interface Admin extends myUser{
    role : "admin" | "ta" | "learner"
}


const newUser : myUser = {dbId: 1, email: "tayo@gmail.com", userId: 32, 
    startTrail: ()=>{
        return "trail started"
    },
    getCoupon: ()=>{
        return 11
    },
    gitHubToken: "82338iweiweweio9823893wioewoi",
   
}

const AdminUser : Admin =  {dbId: 1, email: "yewande@gmail.com", userId: 22, 
startTrail: ()=>{
    return "trail started"
},
getCoupon: ()=>{
    return 11
},
gitHubToken: "56236uiweo9823893wioewoi",
role: "admin"
}



