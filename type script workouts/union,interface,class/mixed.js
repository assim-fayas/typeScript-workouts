//union
// 1
// let score:number|string=33
// score=44;
// score="99";
// 2
// type User={
//     userName:string;
//     id:number;
// }
// type Admin={
//     name:string;
//     id:number;
// }
// let multiLogin:User|Admin={
//    userName:"asim",
//    id:233 
// }
// multiLogin={name:"fayas",id:222}
//alias
// type point={
//     x:number
//     y:number
// }
// function cordinate(pt:point):void{
//     console.log("the x co-ordinate",pt.x);
//     console.log("the y co-ordinate",pt.y);  
// }
// cordinate({x:100,y:200});
// type User={
//     user_name:string;
//     readonly email:string;
//     is_login?:boolean;
// }
// function createUser(user:User):User {
//     return {user_name:user.user_name,email:user.email}
// }
// let users=createUser({user_name:"asim",email:"asim@123"})
// console.log(users);
// const data:(string | number)[]=["1",2,3,4]
// let seatAllotment:'front' | 'back' | 'left';
var user;
user = [0, "eee", false];
