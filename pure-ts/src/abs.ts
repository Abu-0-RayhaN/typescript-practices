abstract class TakePhotos{
    constructor(
        public cameraMode:string,
        public filter:string,
    ){}
    abstract getSepia():void
    getReelTime():number{
        return 8 
    }
}
class Insta extends TakePhotos{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){
        super(cameraMode,filter)
    }
    getSepia(): void {
        console.log("sepia");
    }
}
// const bg = new Insta("test",'test')