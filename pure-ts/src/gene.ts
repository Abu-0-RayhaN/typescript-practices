const score:Array<number>=[]
const names:Array<string>=[]

function identityOne(val:boolean|number):boolean | number{
    return val 
}

function identityTwo(val:any):any{
    return val
}
function identityThree<Type>(val:Type):Type{
    return val
}
identityThree(true)
function identityFour<T>(val:T):T{
    return val
}

interface Bottle{
    brand:string,
    type:number
}
// identityFour<Bottle>({})

function setSearchProducts<T,>(products:T[]):T{
    return products[0]

}
const getMoreSearchProducts=<T>(products:T[]):T[]=>{
    return products
}
interface DataBase{
    connection:string,
    username:string,
    password:string
}

function anohterFunction<T,U extends DataBase>(valOne:T,valTwo:U):object{
    return{
        valOne,
        valTwo
    }
}

anohterFunction(3,{connection:'as',username:'ag',password:'asg'})


interface Quiz{
    name:string,
    type:string
}
interface Course{
    name:string,
    author:string,
    subject:string
}
class Sellable<T>{
    public cart:T[]=[]

    addToCart(product:T){
        this.cart.push(product)
    }
    

}