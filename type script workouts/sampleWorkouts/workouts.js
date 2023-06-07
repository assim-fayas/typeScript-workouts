// 1
var _a, _b;
// import readlineSync from 'readline-sync';
// const userInput: string = readlineSync.question('Enter a character: ');
// if ( userInput) {
//   console.log('Character entered:', userInput);
// } else {
//   console.log('Invalid input. Please enter a single character.');
// }
// no2 
var num1 = parseInt((_a = prompt("enter number")) !== null && _a !== void 0 ? _a : '');
console.log('number1:', num1);
var num2 = parseInt((_b = prompt("enter nother number")) !== null && _b !== void 0 ? _b : '');
console.log('number2:', num2);
var sum = num1 + num2;
console.log('result:', sum);
// no3 
// const P:number|null = parseInt(prompt("enter principal Amount")??'')
// console.log('principle amount:',P);
// const R:number|null = parseInt(prompt('enter interest Rate')??'')
// console.log('interest rate:',R);
// const n:number|null = parseInt(prompt('enter no of years')??'')
// console.log('no of years:',n);
// if(P!==null && R!==null && n!==null){
//     const SI:number = (P*R*n)/100
//     console.log('simple interest:',SI);
// }else{
//     console.log("bad request");
// }
// // no4 
// const mark:number = parseInt(prompt('enter your mark')??'')
// if(mark<50){
//     console.log('failed');
// }else{
//     console.log("passed");
// }
// // no5 
// const totalMark:number = parseInt(prompt('enter your total mark')??'')
// if(totalMark>100){
//     console.log('invalid mark');
// }else if(totalMark>=90){
//     console.log('A grade');
// }else if(totalMark< 90 && totalMark >=80){
//     console.log('B grade');
// }else if(totalMark < 80 && totalMark>=70){
//     console.log("C grade");
// }else if(totalMark<70 && totalMark >= 60){
//     console.log('D grade');
// }else if(totalMark<60 && totalMark>=50){
//     console.log("E grade");
// }else{
//     console.log('failed');
// }
// no6
// const number:number = parseInt(prompt('enter a number btw 1 and 7')??'')
// console.log('entered number:',number);
// switch(number){
//     case 1:
//         console.log('Sunday');
//         break;
//     case 2:
//         console.log('Monday');
//         break;
//     case 3:
//         console.log('Tuesday');
//         break;
//     case 4:
//         console.log('Wednesday');
//         break;
//     case 5:
//         console.log('Thursday');
//         break;
//     case 6:
//         console.log('Friday');
//         break;
//     case 7:
//         console.log('Saturday');
//         break;
//     default:
//         console.log('invalid entry');
//         break;
// }
// // no7
// const number:number = parseInt(prompt('enter a number')??'')
// for(let i=1;i<=10;i++){
//     console.log(i+`*`,number+`:`,number*i);
// }
// // no8
// const limit:number = parseInt(prompt('enter the limit')??'')
// let sum:number = 0;
// for(let i=1;i<=limit;i++){
//     if(i%2!==0){
//         sum+=i
//     }else{
//         continue;
//     }
// }
// console.log("limit:",limit);
// console.log('sum of odd numbers:',sum);
// // no9
// const n:number = parseInt(prompt('enter the limit')??'')
// for(let i=1;i<=n;i++){
//     let pattern:string = ''
//     for(let j=i;j<=i;j++){
//         pattern += j+'  '
//     }
//     console.log(pattern);
// }
// // no10 
// const limit:number = parseInt(prompt("enter limit")??'')
// const array1:number[]=[];
// const array2:number[]=[];
// for(let i=0;i<=limit;i++){
//     const values:number = parseInt(prompt('enter the values of array1')??'')
//     if(values){
//         array1[i]=values;
//     }else{
//         console.log('invalid entry');
//     }
// }
// for(let i=0;i<=limit;i++){
//     const values = parseInt(prompt('enter the values of array2')??'')
//     if(values){
//         array2[i]=values
//     }else{
//         console.log('invalid entry');
//     }
// }
// for(let i=0;i<array1.length;i++){
//     let temp = array1[i]
//     array1[i] = array2[i]
//     array2[i] = temp
// }
// console.log(array1);
// console.log(array2);
// no11
// const limit:number = parseInt(prompt("enter limit")??'')
// const array1:number[]=[];
// for(let i=0;i<=limit;i++){
//     const values:number = parseInt(prompt('enter the values of array1')??'')
//     if(values){
//         array1[i]=values;
//     }else{
//         console.log('invalid entry');
//     }
// }
// console.log('array:',array1);
// let count:number = 0
// for(let i=0;i<array1.length;i++){
//     if(array1[i] %2 == 0){
//         count++
//     }
// }
// console.log('no of even numbers in array1:',count);
// no12
// const limit:number = parseInt(prompt("enter limit")??'')
// const array1:number[]=[];
// for(let i=0;i<limit;i++){
//     const values:number = parseInt(prompt('enter the values of array1')??'')
//     if(values){
//         array1[i]=values;
//     }else{
//         console.log('invalid entry');
//     }
// }
// console.log("array:",array1);
// for(let i=0;i<array1.length-1;i++){
//     for(let j=i+1;j<array1.length;j++){
//         if(array1[i]>array1[j]){
//             let temp:number = array1[i]
//             array1[i] = array1[j]
//             array1[j] = temp
//         }
//     }
// }
// console.log("array after sorted:",array1);
// no13
// const word:string = prompt("enter string")??'';
// function check(word:string){
//     const l:number = word.length;
//     let flag:boolean|null = true;
//     for(let i=0;i<l/2;i++){
//         if(word[i] !== word[l-i-1]){
//             console.log(word+'is not a palindrom');
//             flag = false;
//             break;
//         }else{
//             flag = true;
//         }
//     }
//     if(flag === true){
//         console.log(word+"is a palidrom");
//     }
// }
// check(word);
// // no14
// // const array:number[]=[]
// // const array2:number[][] = [];
// // const sum:number[][]=[]
// // const limit:number = parseInt(prompt('enter a limit')??'');
// // for(let i:number = 0;i<limit;i++){
// //     array[i] = new Array(limit);
// //     array2[i] = new Array(limit);
// //     sum[i] = new Array(limit);
// // }
// // for(let i:number = 0;i<limit;i++){
// //     for(let j:number = 0;j<limit;j++){
// //         array[i][j] = parseInt(prompt('enter values of first array')??'')
// //         array2[i][j] = parseInt(prompt('enter values of second')??'');
// //     }
// // }
// // console.log("array are");
// // console.log("array 1:"+array);
// // console.log("array 2:"+array2);
// // for(let i:number = 0;i<limit;i++){
// //     for(let j:number = 0;j<limit;j++){
// //         sum[i][j] = array[i][j] + array2[i][j]
// //     }
// // }
// // console.log('total of two array:'+sum);
// // no23
// function main(){
//     const array:number[][] = []
//     const size:number = parseInt(prompt('enter the size of the array')??'');
//     getArray(array,size);
//     displayArray(array)
// }
// function getArray(array,size){
//     for(let i=0;i<size;i++){
//         array[i] = new Array(size)
//     }
//     for(let i=0;i<array.length;i++){
//         for(let j=0;j<array.length;j++){
//             array[i][j] = parseInt(prompt('enter the values of the array')??'')
//         }
//     }
// }
// function displayArray(array:number[][]){
//     console.log(array);
// }
// main();
// // no24
// class area{
//     circle(){
//         const  radious:number = parseInt(prompt("enter the radius")??'');
//         let ans:number = 3.14*(radious*radious)
//         console.log(ans);
//     }
//     square(){
//         const  value:number = parseInt(prompt("enter the value")??'');
//         let ans:number = value*value;
//         console.log(ans);
//     }
//     rectangle(){
//         const  height:number = parseInt(prompt("enter the height")??'');
//         const  width:number = parseInt(prompt("enter the width")??'');
//         const ans  = width*height;
//         console.log(ans);
//     }
//     triangle(){
//         const  bLength:number = parseInt(prompt("enter the base length")??'');
//         const  length:number = parseInt(prompt("enter the length")??'');
//         const ans = 5*bLength*length;
//         console.log(ans);  
//     }
// }
// class Myclass extends area{
//     main(){
//         const choice:number = parseInt(prompt('enter your choice')??'')
//         console.log('you choosen'+choice);
//         switch(choice){
//             case 1:
//                 this.circle();
//                 break;
//             case 2:
//                 this.square();
//                 break;
//             case 3:
//                 this.rectangle();
//                 break;
//             case 4:
//                 this.triangle();
//                 break;
//             default:
//                 console.log('invalid entry');
//                 break;
//         }
//     }
// }
// const checkk = new Myclass();
// checkk.main();
// // no25
// var library = [ 
//     {
//         title: 'Bill Gates',
//         author: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         title: 'Steve Jobs',
//         author: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         readingStatus: false
//     }
// ];
// const len:number = library.length;
// for(let i=0;i<len;i++){
//     if(library[i].readingStatus === false){
//         console.log('you still need to read'+`'`+library[i].title+`'`+library[i].author);
//     }else{
//         console.log("already read"+`'`+library[i].title+`'`+library[i].author);
//     }
// }
// //  no26
// function isString(){
//     const data:string|number|null = prompt("enter the data wnt to reverse")??'';
//     if(data){
//         try{
//             const reversed:number|string|null = data
//             .split("")
//             .reverse()
//             .join('');
//             console.log("reversed data :"+reversed);
//         }catch(error){
//             console.log("split is not of a function");
//         }finally{
//             if(!isNaN(Number(data))){
//                 console.log('type of data is:'+'number');
//             }else{
//                 console.log("type of data is " + "string");
//             }
//         }
//     }
// }
// isString()
// // no27
// const my_height:number = parseInt(prompt('enter your height')??'')
// if(my_height !== null){
//     try{
//         if(isNaN(my_height)) throw new Error('notANumberError');
//         if(200 > my_height) throw new Error('TinyHeight Error')
//         if(200< my_height) throw new Error('hugeHeightError')
//     }catch(Error:any){
//         console.log(Error.message);
//     }
// }
// // no28
// class car{
//     name:string;
//     milage:number;
//     max_speed:number;
//     constructor(name:string,milage:number,max_speed:number){
//         this.name = name;
//         this.milage = milage;
//         this.max_speed = max_speed;
//     }
// }
// const car1 = new car('civic',14,220)
// console.log(car1);
// // no29
// function myFilter(arrray:number[],cb:Function){
//     console.log(arrray);
//     cb(array);
// }
// function cb(arrray:number[]){
//     let sum:number = 0;
//     for(let i=0;i<arrray.length;i++){
//         sum+= arrray[i]
//     }
//     if(sum %2 == 0){
//         return console.log(true,sum);
//     }else{
//         return console.log(false,sum);
//     }
// }
// const size:number = parseInt(prompt('enter size of the array')??'')
// const arrray:number[] =[];
// for(let i=0;i<size;i++){
//     const value:number = parseInt(prompt('enter values of array')??'')
//     arrray[i] = value;
// }
// myFilter(arrray,cb);
// export{}
