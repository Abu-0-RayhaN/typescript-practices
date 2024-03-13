// type User = {
//     name:string;
//     email:string;
//     isActive:boolean;
// }
// function createUser(user:User):User{
//     return {name:"",email:"",isActive:true}
// }
// createUser({name:"",email:"",isActive:true})

type User ={
    readonly _id:string;// you get to only read the id for a user after it's created
    name:string;
    email:string;
    isActive:boolean;
    creditCardDetials?:number;// question marks means creditCardDetails will be optional
}

let myUser:User={
    _id:'34324',
    name:"h",
    email:'h@h.com',
    isActive:false
}

myUser.email="h@gmail.com"
// myUser._id='asa' //you can't reassign because _id is readonly


// you are combining this two type with cardDetails type
type cardNumber ={
    cardNumber:string
}

type cardDate ={
    cardNumber:string
}
type cardDetails=cardNumber & cardDate & {
    cvv:number
}