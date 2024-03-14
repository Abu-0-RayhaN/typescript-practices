"use strict";
// class User{
//      public email:string
//     name:string
//     private readonly city:string=''
//     constructor(email:string,name:string){
//         this.email=email
//         this.name=name
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = '';
    }
}
const rayhan = new User("k@g.com", "rayhan");
//setters and getters
class aUser {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this._courses = 1;
        this.city = '';
    }
    deleteToken() {
        console.log("token deleted");
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class subUser extends aUser {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourses() {
        this._courses = 4;
    }
}
const rayhaN = new aUser("k@g.com", "rayhan");
