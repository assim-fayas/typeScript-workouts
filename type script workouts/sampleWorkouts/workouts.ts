
// 1

// import readlineSync from 'readline-sync';

// const userInput: string = readlineSync.question('Enter a character: ');

// if ( userInput) {
 
//   console.log('Character entered:', userInput);
// } else {
//   console.log('Invalid input. Please enter a single character.');
// }



// no2 
// import readlineSync from 'readline-sync';

// const num1: number = parseInt(readlineSync.question('Enter a number: '));
// console.log('Number 1:', num1);

// const num2: number = parseInt(readlineSync.question('Enter another number: '));
// console.log('Number 2:', num2);

// const sum: number = num1 + num2;
// console.log('Sum:', sum);


// no3 
// import readlineSync from 'readline-sync';

// const P: number | null = parseInt(readlineSync.question("Enter principal amount") ?? '');
// console.log('Principal amount:', P);

// const R: number | null = parseInt(readlineSync.question('Enter interest rate') ?? '');
// console.log('Interest rate:', R);

// const n: number | null = parseInt(readlineSync.question('Enter number of years') ?? '');
// console.log('Number of years:', n);

// if (P !== null && R !== null && n !== null) {
//   const SI: number = (P * R * n) / 100;
//   console.log('Simple interest:', SI);
// } else {
//   console.log("Bad request");
// }




// // no4 
// import readlineSync from 'readline-sync';

// const mark:number = parseInt(readlineSync.question('enter your mark')??'')
// if(mark<50){
//     console.log('failed');
    
// }else{
//     console.log("passed");
    
// }

// // no5 


 
// import readlineSync from 'readline-sync';

// const totalMark:number = parseInt(readlineSync.question('enter your total mark')??'')
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
// import readlinesync from 'readline-sync';

// const number:number=parseInt(readlinesync.question("enter the number between 1 to 7")??'' )
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
// import readlinesync from 'readline-sync';
// const number:number=parseInt(readlinesync.question("Enter the Number"))
// for(let i=1;i<=10;i++){
//     console.log(i+`*`,number+`:`,number*i);
    
// }

// // no8

// import readlinesync from 'readline-sync'
//  const limit:number=parseInt(readlinesync.question("Enter the limit") ??'')
//  var sum:number=0;
//  for(let i=1;i<=limit;i++){
//     if(i%2!==0){
//         sum+= i;
//     }
//  }
//  console.log("the sum =",sum);
 

// // no9
// import readlineSync from 'readline-sync';

// const n: number = parseInt(readlineSync.question('Enter the limit') ?? '');

// for (let i = 1; i <= n; i++) {
//   let pattern: string = '';
//   for (let j = 1; j <= i; j++) {
//     pattern += j + '  ';
//   }
//   console.log(pattern);
// }


// // no10 

// import readlinesync from 'readline-sync'
// let array1: number[]=[];
// let array2: number[]=[];
// console.log("Enter the 5 numbers to insert in array 1");

// for(let i=0;i<5;i++){
//     const value:number=parseInt(readlinesync.question("enter the number")??'');
   
//     array1.push(value)
    
// }
// console.log(array1);

// console.log("Enter the 5 numbers to insert in array 2");
// for(let i=0;i<5;i++){
//     const value:number=parseInt(readlinesync.question("enter the number")??'');
   
//     array2.push(value)
    
// }
// console.log(array2);
// //swapping
// [array1, array2] = [array2, array1];

// console.log("array after swapping");
// console.log("array1",array1);
// console.log("array2",array2);




// no11

// import readlinesync from 'readline-sync'
// let array:number[]=[]
// let count:number=0;

// const limit:number=parseInt(readlinesync.question("enter the limit")??'')
// for(let i=0;i<limit;i++){
//     let value:number=parseInt(readlinesync.question(`Enter the ${i} number`)??'')
//     array.push(value)
// }
// for(let i=0;i<array.length;i++){
//     if(array[i]%2===0){
// count++
//     }
// }
// console.log("the count of even numberin the array,",count);



// no12
// import readlinesync from 'readline-sync'
// const limit:number = parseInt(readlinesync.question("enter limit")??'')
// const array1:number[]=[];


// for(let i=0;i<limit;i++){
//     const values:number = parseInt(readlinesync.question('enter the value')??'')
    
//       array1.push(values)
    
// }
// console.log("array:",array1);

// array1.sort((a,b)=>b-a)

// console.log("array after sorted:",array1);

// no13
// import readlinesync from 'readline-sync'
// const word:string = readlinesync.question("enter string")??'';

// function check(value:string) {
// const l=value.length;
// let flag:boolean | null=true
// for(let i=0;i<l/2;i++){
//     if(value[i]!==value[l-i-1]){
// flag=false;
// console.log("Not palindrom");
// break;

//     }else{
//         flag=true;
//     }
// }
//     if(flag===true){
//         console.log(" the given string is palindrom");
        
//     }
// }
// check(word);


// // no14
// function addTwoArrays(arr1: number[][], arr2: number[][]): number[][] {
//     const sumArray: number[][] = [];
  
//     for (let i = 0; i < arr1.length; i++) {
//       sumArray[i] = [];
//       for (let j = 0; j < arr1[i].length; j++) {
//         sumArray[i][j] = arr1[i][j] + arr2[i][j];
//       }
//     }
  
//     return sumArray;
//   }
  
  
//   const array1: number[][] = [[1, 2], [3, 4]];
//   const array2: number[][] = [[5, 6], [7, 8]];
  
//   const sumArray: number[][] = addTwoArrays(array1, array2);
  
//   console.log("Array 1:", array1);
//   console.log("Array 2:", array2);
//   console.log("Sum Array:", sumArray);
  



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

//24
// import readlinesync from 'readline-sync'

// class Area{
    
//     circle(){
//         const radius=parseInt(readlinesync.question("Enter the radius")??'')
//         console.log("radius =",3.141*radius*radius);
        
//     }
//     square(){
//         const side=parseInt(readlinesync.question("Enter the length")??'')
//         console.log("area =",side*side);
//     }
//     rectangle(){
//    const length=parseInt(readlinesync.question("Enter the length")??'')
//    const breadth=parseInt(readlinesync.question("Enter the breadht")??'')
//    console.log("area =" + length*breadth);
//     }
//     triangle(){
//         const blength=parseInt(readlinesync.question("Enter the length")??'')
//    const leangth=parseInt(readlinesync.question("Enter the baseleagth")??'')
//    console.log("the area of triangle:",5*blength*leangth);
   
//     }
// }

// class Myclass extends Area{
//    main(){
//     const choice:number = parseInt(readlinesync.question('enter your choice' +'1 to 4')??'')
//     switch(choice){
//         case 1:
//         console.log(this.circle());
//         break;
//         case 2 :
//              console.log(this.square());
//              break;
//              case 3 :
//              console.log(this.rectangle());
//              break;
//              case 4 :
//              console.log(this.triangle());
//              break;
        
// default:console.log("invalid entry");
// break;

//     }
//    }
    
// }
// const area=new Myclass()
// area.main()


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
//  no26
// import readlinesync from 'readline-sync'
// function isString(){
//     const data:string|number|null = readlinesync.question(parseInt("enter the data wnt to reverse")??'');

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
//             if((Number(data))){
//                 console.log('type of data is:'+'number');
                
//             }else{
//                 console.log("type of data is " + "string");
                
//             }
//         }
//     }
// }
// isString()
