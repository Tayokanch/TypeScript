
//How to extend a class

class TakePhoto {
    constructor(public cameraMode : string, public filter : string){

    }
}

class Instagram extends TakePhoto{
    constructor(
        public cameraMode : string, 
        public filter : string,
        public burs : string,
    ){
        super(cameraMode, filter)
    }
}
const firstPic = new Instagram( "yes",  "active", "yes")
