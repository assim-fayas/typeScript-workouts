"use strict";
// functions
Object.defineProperty(exports, "__esModule", { value: true });
function add(num) {
    return num + 2;
}
console.log(add(3));
// function in string
/*  in the case of variable it inferes
 the "type" very nicely,in the case of function it
 is compersery to put "type"   */
function getUpper(value) {
    return value.toUpperCase();
}
console.log(getUpper("type script"));
//function with multiple arguments
function userDetails(name, email, phone) {
    var rslt = "hai ".concat(name, ",your email is ").concat(email, ",and the\n     phone number is ").concat(phone);
    return rslt;
}
var rslt = userDetails("asim", "asim!fayas@gmail.com", 88893422);
console.log(rslt);
// arrow function
var loginUser = function (id, name) {
    var rslt = "hai ".concat(name, ",your id is ").concat(id);
    return rslt;
};
console.log(loginUser(11, "nameer"));
// setting default value
function signup(userId, name, isLoggedIn) {
    //function body
    if (isLoggedIn === void 0) { isLoggedIn = true; }
}
signup(123, "sufad");
function addd(num1, num2) {
    return num1 + num2;
}
console.log(addd("1", "3"));
