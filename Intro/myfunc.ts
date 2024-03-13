function addTwo(num:number):number{
    return num +2
}
addTwo(5)
function getUpper(val: string){
    return val.toLocaleUpperCase()
}

function signUpUser(name:string, email:string, isPaid:boolean){

}
let loginUser= (name:string, email:string, isPaid:boolean=false):string=>{
    return name
}

loginUser("h","h@amd.com")
signUpUser("rayhan","rayhan@.com",false)

function getValue(myVal:number){
    if(myVal>5){
        return 6
    }
    return "nothing wrong with it"
}
let getV=(myValue:number)=>myValue>5? 3:"noting wrong with it"

const getHello=(s:string):string=>{return ""}

const heros =["thor", "spiderman","ironman"]
heros.map(hero=>{
    return `hero is ${hero}`
})


function consoleError(errormsg:string):void{
    console.log(errormsg)
}

function HandleError(errormsg:string):never{
    throw new Error(errormsg)
}
export{}