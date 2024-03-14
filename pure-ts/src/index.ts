// class User{
//      public email:string
//     name:string
//     private readonly city:string=''
//     constructor(email:string,name:string){
//         this.email=email
//         this.name=name
//     }
// }
class User{
     
     readonly city:string=''
    constructor( public email:string, public name:string){
  
    }
}

const rayhan=new User("k@g.com","rayhan")


//setters and getters

class aUser{
     private _courseCount=1
     protected _courses=1
     readonly city:string=''
    constructor( public email:string, public name:string){
    }
    private deleteToken(){
        console.log("token deleted");
    }
    get getAppleEmail():string{
        return `apple ${this.email}`
    }
    get courseCount():number{
        return this._courseCount
    }
    set courseCount(courseNum:number){
        if(courseNum<=1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount=courseNum
    }
}

class subUser extends aUser{
    isFamily:boolean=true
    changeCourses(){
        this._courses=4
    }
}
const rayhaN=new aUser("k@g.com","rayhan")
