interface iuser{
    readonly dbId:number,
    email:string,
    userId:number,
    googleId?:string,
    // startTrail:()=>string
    startTrail():string,
    getCoupon(couponname:string,off:number):number
}
let rk:iuser={dbId:22,email:'e.com',userId:3,startTrail:()=>{ return "trail started"},
getCoupon:(name:"rkcoup",off=20)=>{return 10}}
rk.email='hv.com'