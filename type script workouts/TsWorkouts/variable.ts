//string

let greeting:string="hai Asim fayas"
console.log(greeting);

//number

let userId:number=3322


//boolean
let isLoggedIn:boolean=true
console.log( isLoggedIn.valueOf());


//type inference

/* TypeScript Type Inference is a feature of the 
TypeScript language that allows the compiler to 
automatically determine the type of a variable or 
expression based on its initialization or usage. 
In other words, TypeScript can infer the 
type of a value without explicitly specifying it.*/


let name = "John"; // Type inference infers name as type string
let age = 25; // Type inference infers age as type number
let isActive = true; // Type inference infers isActive as type boolean

function add(a: number, b: number) {
  return a + b;
}

let result = add(5, 10); // Type inference infers result as type number



//any

/*any, that you can use whenever you don’t want
 a particular value to cause typechecking errors.*/

 let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed 
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

// noImplicitAny

/*When you don’t specify a type, and 
TypeScript can’t infer it from context, 
the compiler will typically default to any.

You usually want to avoid this, though,
 because any isn’t type-checked. Use the 
 compiler flag noImplicitAny to flag any 
 implicit any as an error.*/













export{}
