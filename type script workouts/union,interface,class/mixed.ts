
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

// let user:[number,string,boolean]
// user=[0,"eee",false]

// enum direction{
//     up=1,
//     right="Right",
//     down="Down",
//     left="Left"
// }
// console.log(direction.right);

// interface person {
//     name: string;
//     age: number;
//     sayhello(): void;
// }
// interface person {
//     place?: string
// }

// class student implements person {
//      name: string;
//     age: number;
//     constructor(name: string, age: number) {
//         this.name = name
//         this.age = age
//     }
//     sayhello(): void {
//         console.log(`hai i am ${this.name},i am ${this.age} years old`);
//     }
// }

// interface Animal{
//     name:string;
//     makeSound():void
// }
// interface dog extends Animal{
//     breed:string
// }

// class labodor implements dog{
//     name:string
//     breed:string
//     constructor(name:string,breed:string){
//         this.name=name
//         this.breed=breed
//     }
//     makeSound(): void {
//         console.log("bow bow");

//     }
// }

// const myDog=new labodor("canon","zzz")

// myDog.makeSound()

// class Student{
//    private  Name:string
//    private Age:number

//    constructor(Name:string,Age:number){
//     this.Name=Name
//     this.Age=Age
//    }
//    private greet():string{
//     return `hai ${this.Name}`
//    }
//    public person():void{
//     console.log(this.greet());

//    }

// }

// const student=new Student("asim",23)
// student.person()


// class person{
//     protected name:string;
//     id:number;
//     constructor(name:string,id:number){
//         this.name=name
//         this.id=id
//     }

// }

// class employee extends person{
//     constructor(name:string,id:number){
//         super(name,id)
//     }
//     greet():void{
//       console.log( `welcome ${this.name} to our family and your id is ${this.id}`);

//     }
// }

// const employ=new employee("asim",121)
// employ.greet()


// grtter methode

class circle {
    private radius: number
    constructor(radius: number) {
        this.radius = radius
    }
    get diameter(): number {
        return this.radius * 2
    }
    set diameter(diameter: number) {
        if (diameter > 0) {
            this.radius = diameter / 2
        }
    }
}