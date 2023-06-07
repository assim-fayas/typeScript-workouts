 //object

 function createUser(obj:{name:string,isPaid:boolean}){

 }
 createUser({name:"asim",isPaid:true})

//returning object

 function createCourse(Name:string,Price:number):{name:string,price:number}{
    return {name:Name,price:Price}
 }
console.log( createCourse("asim",333));


//readonly

type User={
    readonly _id:string;
    name:string;
    email :string;
    isActive:boolean
    creditCard?:number   //optional 

}

let user:User={
    _id:"123",
    name:"asim",
    email:"asim@123",
    isActive:true
    
}

user.name="asim"
user._id="223"














 export{}