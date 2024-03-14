interface iuser{
    readonly dbId:number,
    email:string,
    userId:number,
    googleId?:string,
    // startTrail:()=>string
    startTrail():string,
    getCoupon(couponname:string,off:number):number
}

interface iuser{
    githubToken:string;
}
let rk:iuser={dbId:22,email:'e.com',userId:3, githubToken:'github',startTrail:()=>{ return "trail started"},
getCoupon:(name:"rkcoup",off=20)=>{return 10}}
rk.email='hv.com'

interface Admins extends iuser{
    role:"admin"| "ta"| "student"
}

let ab:Admins={dbId:22,email:'e.com',userId:3, githubToken:'github',role:'admin',startTrail:()=>{ return "trail started"},
getCoupon:(name:"rkcoup",off=20)=>{return 10}}