class User{
    email:string
    name:string
    city:string=''
    constructor(email:string,name:string){
        this.email=email
        this.name=name
    }
}

const rayhan=new User("k@g.com","rayhan")