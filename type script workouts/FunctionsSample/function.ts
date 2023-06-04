// functions

function add(num: number) {
    return num + 2
}
console.log(add(3));




// function in string

/*  in the case of variable it inferes
 the "type" very nicely,in the case of function it 
 is compersery to put "type"   */


function getUpper(value: string) {
    return value.toUpperCase()
}

console.log(getUpper("type script"));





//function with multiple arguments

function userDetails(name: string, email: string, phone: number) {
    let rslt = `hai ${name},your email is ${email},and the
     phone number is ${phone}`

    return rslt
}

let rslt = userDetails("asim", "asim!fayas@gmail.com", 88893422)

console.log(rslt);


// arrow function

let loginUser = (id: number, name: string) => {
    let rslt = `hai ${name},your id is ${id}`

    return rslt
}
console.log(loginUser(11, "nameer"));

// setting default value


function signup(userId: number, name: string, isLoggedIn: boolean = true) {

    //function body

}

signup(123, "sufad")




// Return Type Annotations

/* usually don’t need a return type annotation because TypeScript will 
infer the function’s return type based on its return statements. 
Some codebases will explicitly specify a return type for documentation
 purposes, to prevent accidental changes, or just for personal preference.*/

function getFavoriteNumber(): number {
    return 26;
}


// Anonymous Functions

const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
 
// Contextual typing also applies to arrow functions



names.forEach((s) => {
  console.log(s.toUpperCase());
});

/*en though the parameter s didn’t have a type annotation, TypeScript used the types of 
the forEach function, along with the inferred type of the array, to determine the type s 
will have.
This process is called contextual typing because the context that the function occurred 
within informs what type it should have. */

export { }