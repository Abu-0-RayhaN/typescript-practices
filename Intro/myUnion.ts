let score:number | string =33

score=44
score="33"
type myUser={
    name:string;
    id:number
}
type Admin={
    username:string;
    id:number
}

let rayhan:myUser| Admin ={name:"rayhan",id:334}

function getDbId(id:number| string){
    if(typeof id === "string"){
        id.toLocaleLowerCase()
    }

}

//arrays

// const data:number[]=[1,2,3,"4"]
// const data2:string[]=[1,2,3,"4"]
const data3:(string| number)[]=[1,2,3,"4"]

let pi:3.14 = 3.14

let seatAllotment:"aisle"|"middle"|"window"
