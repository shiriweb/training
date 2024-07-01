// Variables
//var
// var x = 90;
// console.log(x);
// var x= 100;
// console.log(x);

// let
// let y= 600;
// console.log(y);

// y= 100; //value can be update but variable cannot be redeclared
// console.log(y);

//const
// const result = 100;
// console.log(result);

// result= 200; //cannot be redeclared nor update
// console.log(result);

// datatype in javascript

//string
// const output = "Ram KC";
// console.log(output);
// console.log(typeof output);

//number (include number, float)
// const result= 90;
// console.log(result);
// console.log(typeof result);

// float
// const result = 20.90;
// console.log(result);
// console.log(typeof result);

// undefined //const cannot be used for undefined
// let x; 
// console.log(x);
// console.log(typeof x);

// null
// const x= null;
// console.log(x);
// console.log(typeof x);

//boolean
// const isTrue = true;
// console.log(isTrue);
// console.log(typeof isTrue);

// BigInt
// const result = 36478832836n;
// console.log(result);
// console.log(typeof result);

//Symbol
// const output= Symbol("Hello World");
// console.log(output);
// console.log(typeof output);


// type conversion
// Conversion of string to Number
// const result = "123";
// const output = Number(result);
// console.log(output);
// console.log(typeof output);

// const result = "123";
// const output = parseInt(result); 
// console.log(output);
// console.log(typeof output);

// Conversion of string to float
// const result = "12.773";
// const output = parseFloat(result); 
// console.log(output);
// console.log(typeof output);

//Conversion to string
// const result = 123;
// const output = String(result); 
// console.log(output);
// console.log(typeof output);


// const result = 123;
// const output = result.toString(); 
// console.log(output);
// console.log(typeof output);

//bolean into string
// const isMarried = false;
// const ans = String(isMarried);
// console.log(ans);
// console.log(typeof ans);

// Object
// const obj ={
//     name : "Ram",
//     age :30,
//     gender : "Male",
//     isMarried : false
// };
// console.log(obj);
// console.log(obj.age);
// console.log(obj["age"]);
// console.log(typeof obj);


//array in js
// const array = [2,5,3,2,1];
// console.log(array);
// console.log(typeof array);

// const date =new Date();
// console.log(date);
// console.log(typeof date);

// emplicit
// const result = 1 + "5";
// console.log(result);
// console.log(typeof result);

// explicit
// const result = 1 - "5";
// console.log(result);
// console.log(typeof result);

// String Method

// const result = "Hello World";
// // length
// console.log(result.length);

// // charAt
// console.log(result.charAt(2));

// // indexOf
// console.log(result.indexOf("o"));

// // lastIndexOf
// console.log(result.lastIndexOf("o"));

// // lowerCase
// console.log(result.toLowerCase());

// // upperCase
// console.log(result.toUpperCase());

// // replace
// console.log(result.replace("World", "Everyone"));

// // includes
// console.log(result.includes("World"));

// // slice
// console.log(result.slice(1,4));

// //concat
// console.log(result.concat("I love JS"));

// // trim
// let output = "                Hello World";
// console.log(output.trim());

// // split
// console.log(result.split(" "));

// concatination
// let x ="Hello World";
// let y = "I love JS";
// console.log(x + " " + y);

// const a = 34;
// const b = 23;
// result = a + b;
// console.log("The sum of two number is : " + result);
// console.log(`The sum of two number is : ${result}`);

// operators in js
// let y = 90;
// y = y+ 45;
// console.log(y);

// let x = 20;
// x += 45;
// console.log(x);

//  comparison operator
// let a = 100;
// let b = 45;
// let c = "23";
// console.log(a == c);
// console.log(a === c);
// console.log(a != b);
// console.log(a != c);
// console.log(a > b);
// console.log(a < b);

// important
// comaprision
// logical
// conditional operator 
// teranry operator
// let ageGroup = 18;
// console.log(ageGroup >= 18 ? "You can vote": "You cannot vote" );

// unary operator
// let x = "123";
// let y = +x //positive
// console.log(y);
// console.log(typeof y);


// const obj = {
//     name : " Ram ",
//     age : 23
// };

// delete is an unary operator in js
// delete obj.name;
// console.log(obj);

// conditional statement
// example1
// let email = "kirankc@gmail.com";
// let password = "12345";
// if(email === "kirankc@gmail.com" && password === "12345"){
//     console.log("Login Successfully");
// } else {
//     console.log("Invalid Information");
// }

// SEE Grade Check
// example 2
// let grade = 60;

// if(grade >= 90){
//     console.log("Grade : A+");
// }else if(grade >= 80){
//     console.log("Grade : A");
// }else if(grade >= 70){
//     console.log("Grade : B+");
// }else if(grade >= 60){
//     console.log("Grade : B");
// }else if(grade >= 50){
//     console.log("Grade : C");
// }else if(grade >= 40){
//     console.log("Grade : D");
// } else {
//     console.log("Failed");
// }

// Weather Check
// example 3
// let weather = "Sunny";
// if(weather === "Sunny"){
//     console.log("Today is sunny");
// }else if(weather === "Rainy"){
//     console.log("Today is rainy");
// }else if(weather === "Windy"){
//     console.log("Today is windy");
// }else if(weather === "Cloudy"){
//     console.log("Today is cloudy");
// }else {
//     console.log("Invalid weather");
// }

// Control Statement
// switch case

// example 1
// let role ="super admin";
// switch (role) {
//     case "buyer":
//         console.log("You can only buy product");
//         break;
    
//     case "seller":
//         console.log("You can sell your product");
//         break;
    
//     case "admin":
//         console.log("You can add your product");
//         break;

//     case "super admin":
//         console.log("You can access everything");
//         break;
//     default:
//         console.log("Invalid role");
//         break;
// } 


// example 2
// let date = new Date().getDay();
// console.log(date);

// switch(date){
//     case 0:
//         console.log("Sunday");
//         break;

//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;
    
//     case 3:
//         console.log("Wednesday");
//         break;
                
//     case 4:
//         console.log("Thursday");
//         break;
        
//     case 5:
//         console.log("Friday");
//         break;

//     case 6:
//         console.log("Saturday");
//         break;

//     default:
//         console.log("Invalid Result");
// }

// example 3
let status = 400;

switch(status){
    case 201:
        console.log("Created");
        break;

    case 400:
        console.log("Bad Request");
        break;

    case 403:
        console.log("ForBidden");
        break;

    case 500:
        console.log("Internal Server Error");
        break;

    // case :
    //     console.log("Created");
    //     break;

    default:
        console.log("Invalid Status");
}