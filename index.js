// // // // // // // Variables
// // // // // // //var
// // // // // // // var x = 90;
// // // // // // // console.log(x);
// // // // // // // var x= 100;
// // // // // // // console.log(x);

// // // // // // // let
// // // // // // // let y= 600;
// // // // // // // console.log(y);

// // // // // // // y= 100; //value can be update but variable cannot be redeclared
// // // // // // // console.log(y);

// // // // // // //const
// // // // // // // const result = 100;
// // // // // // // console.log(result);

// // // // // // // result= 200; //cannot be redeclared nor update
// // // // // // // console.log(result);

// // // // // // // datatype in javascript

// // // // // // //string
// // // // // // // const output = "Ram KC";
// // // // // // // console.log(output);
// // // // // // // console.log(typeof output);

// // // // // // //number (include number, float)
// // // // // // // const result= 90;
// // // // // // // console.log(result);
// // // // // // // console.log(typeof result);

// // // // // // // float
// // // // // // // const result = 20.90;
// // // // // // // console.log(result);
// // // // // // // console.log(typeof result);

// // // // // // // undefined //const cannot be used for undefined
// // // // // // // let x; 
// // // // // // // console.log(x);
// // // // // // // console.log(typeof x);

// // // // // // // null
// // // // // // // const x= null;
// // // // // // // console.log(x);
// // // // // // // console.log(typeof x);

// // // // // // //boolean
// // // // // // // const isTrue = true;
// // // // // // // console.log(isTrue);
// // // // // // // console.log(typeof isTrue);

// // // // // // // BigInt
// // // // // // // const result = 36478832836n;
// // // // // // // console.log(result);
// // // // // // // console.log(typeof result);

// // // // // // //Symbol
// // // // // // // const output= Symbol("Hello World");
// // // // // // // console.log(output);
// // // // // // // console.log(typeof output);


// // // // // // // type conversion
// // // // // // // Conversion of string to Number
// // // // // // // const result = "123";
// // // // // // // const output = Number(result);
// // // // // // // console.log(output);
// // // // // // // console.log(typeof output);

// // // // // // // const result = "123";
// // // // // // // const output = parseInt(result); 
// // // // // // // console.log(output);
// // // // // // // console.log(typeof output);

// // // // // // // Conversion of string to float
// // // // // // // const result = "12.773";
// // // // // // // const output = parseFloat(result); 
// // // // // // // console.log(output);
// // // // // // // console.log(typeof output);

// // // // // // //Conversion to string
// // // // // // // const result = 123;
// // // // // // // const output = String(result); 
// // // // // // // console.log(output);
// // // // // // // console.log(typeof output);


// // // // // // // const result = 123;
// // // // // // // const output = result.toString(); 
// // // // // // // console.log(output);
// // // // // // // console.log(typeof output);

// // // // // // //bolean into string
// // // // // // // const isMarried = false;
// // // // // // // const ans = String(isMarried);
// // // // // // // console.log(ans);
// // // // // // // console.log(typeof ans);

// // // // // // // Object
// // // // // // // const obj ={
// // // // // // //     name : "Ram",
// // // // // // //     age :30,
// // // // // // //     gender : "Male",
// // // // // // //     isMarried : false
// // // // // // // };
// // // // // // // console.log(obj);
// // // // // // // console.log(obj.age);
// // // // // // // console.log(obj["age"]);
// // // // // // // console.log(typeof obj);


// // // // // // //array in js
// // // // // // // const array = [2,5,3,2,1];
// // // // // // // console.log(array);
// // // // // // // console.log(typeof array);

// // // // // // // const date =new Date();
// // // // // // // console.log(date);
// // // // // // // console.log(typeof date);

// // // // // // // emplicit
// // // // // // // const result = 1 + "5";
// // // // // // // console.log(result);
// // // // // // // console.log(typeof result);

// // // // // // // explicit
// // // // // // // const result = 1 - "5";
// // // // // // // console.log(result);
// // // // // // // console.log(typeof result);

// // // // // // // String Method

// // // // // // // const result = "Hello World";
// // // // // // // // length
// // // // // // // console.log(result.length);

// // // // // // // // charAt
// // // // // // // console.log(result.charAt(2));

// // // // // // // // indexOf
// // // // // // // console.log(result.indexOf("o"));

// // // // // // // // lastIndexOf
// // // // // // // console.log(result.lastIndexOf("o"));

// // // // // // // // lowerCase
// // // // // // // console.log(result.toLowerCase());

// // // // // // // // upperCase
// // // // // // // console.log(result.toUpperCase());

// // // // // // // // replace
// // // // // // // console.log(result.replace("World", "Everyone"));

// // // // // // // // includes
// // // // // // // console.log(result.includes("World"));

// // // // // // // // slice
// // // // // // // console.log(result.slice(1,4));

// // // // // // // //concat
// // // // // // // console.log(result.concat("I love JS"));

// // // // // // // // trim
// // // // // // // let output = "                Hello World";
// // // // // // // console.log(output.trim());

// // // // // // // // split
// // // // // // // console.log(result.split(" "));

// // // // // // // concatination
// // // // // // // let x ="Hello World";
// // // // // // // let y = "I love JS";
// // // // // // // console.log(x + " " + y);

// // // // // // // const a = 34;
// // // // // // // const b = 23;
// // // // // // // result = a + b;
// // // // // // // console.log("The sum of two number is : " + result);
// // // // // // // console.log(`The sum of two number is : ${result}`);

// // // // // // // operators in js
// // // // // // // let y = 90;
// // // // // // // y = y+ 45;
// // // // // // // console.log(y);

// // // // // // // let x = 20;
// // // // // // // x += 45;
// // // // // // // console.log(x);

// // // // // // //  comparison operator
// // // // // // // let a = 100;
// // // // // // // let b = 45;
// // // // // // // let c = "23";
// // // // // // // console.log(a == c);
// // // // // // // console.log(a === c);
// // // // // // // console.log(a != b);
// // // // // // // console.log(a != c);
// // // // // // // console.log(a > b);
// // // // // // // console.log(a < b);

// // // // // // // important
// // // // // // // comaprision
// // // // // // // logical
// // // // // // // conditional operator 
// // // // // // // teranry operator
// // // // // // // let ageGroup = 18;
// // // // // // // console.log(ageGroup >= 18 ? "You can vote": "You cannot vote" );

// // // // // // // unary operator
// // // // // // // let x = "123";
// // // // // // // let y = +x //positive
// // // // // // // console.log(y);
// // // // // // // console.log(typeof y);


// // // // // // // const obj = {
// // // // // // //     name : " Ram ",
// // // // // // //     age : 23
// // // // // // // };

// // // // // // // delete is an unary operator in js
// // // // // // // delete obj.name;
// // // // // // // console.log(obj);

// // // // // // // conditional statement
// // // // // // // example1
// // // // // // // let email = "kirankc@gmail.com";
// // // // // // // let password = "12345";
// // // // // // // if(email === "kirankc@gmail.com" && password === "12345"){
// // // // // // //     console.log("Login Successfully");
// // // // // // // } else {
// // // // // // //     console.log("Invalid Information");
// // // // // // // }

// // // // // // // SEE Grade Check
// // // // // // // example 2
// // // // // // // let grade = 60;

// // // // // // // if(grade >= 90){
// // // // // // //     console.log("Grade : A+");
// // // // // // // }else if(grade >= 80){
// // // // // // //     console.log("Grade : A");
// // // // // // // }else if(grade >= 70){
// // // // // // //     console.log("Grade : B+");
// // // // // // // }else if(grade >= 60){
// // // // // // //     console.log("Grade : B");
// // // // // // // }else if(grade >= 50){
// // // // // // //     console.log("Grade : C");
// // // // // // // }else if(grade >= 40){
// // // // // // //     console.log("Grade : D");
// // // // // // // } else {
// // // // // // //     console.log("Failed");
// // // // // // // }

// // // // // // // Weather  Check
// // // // // // // example 3
// // // // // // // let weather = "Sunny";
// // // // // // // if(weather === "Sunny"){
// // // // // // //     console.log("Today is sunny");
// // // // // // // }else if(weather === "Rainy"){
// // // // // // //     console.log("Today is rainy");
// // // // // // // }else if(weather === "Windy"){
// // // // // // //     console.log("Today is windy");
// // // // // // // }else if(weather === "Cloudy"){
// // // // // // //     console.log("Today is cloudy");
// // // // // // // }else {
// // // // // // //     console.log("Invalid weather");
// // // // // // // }

// // // // // // // Control Statement
// // // // // // // switch case

// // // // // // // example 1
// // // // // // // let role ="super admin";
// // // // // // // switch (role) {
// // // // // // //     case "buyer":
// // // // // // //         console.log("You can only buy product");
// // // // // // //         break;
    
// // // // // // //     case "seller":
// // // // // // //         console.log("You can sell your product");
// // // // // // //         break;
    
// // // // // // //     case "admin":
// // // // // // //         console.log("You can add your product");
// // // // // // //         break;

// // // // // // //     case "super admin":
// // // // // // //         console.log("You can access everything");
// // // // // // //         break;
// // // // // // //     default:
// // // // // // //         console.log("Invalid role");
// // // // // // //         break;
// // // // // // // } 


// // // // // // // example 2
// // // // // // // let date = new Date().getDay();
// // // // // // // console.log(date);

// // // // // // // switch(date){
// // // // // // //     case 0:
// // // // // // //         console.log("Sunday");
// // // // // // //         break;

// // // // // // //     case 1:
// // // // // // //         console.log("Monday");
// // // // // // //         break;

// // // // // // //     case 2:
// // // // // // //         console.log("Tuesday");
// // // // // // //         break;
    
// // // // // // //     case 3:
// // // // // // //         console.log("Wednesday");
// // // // // // //         break;
                
// // // // // // //     case 4:
// // // // // // //         console.log("Thursday");
// // // // // // //         break;
        
// // // // // // //     case 5:
// // // // // // //         console.log("Friday");
// // // // // // //         break;

// // // // // // //     case 6:
// // // // // // //         console.log("Saturday");
// // // // // // //         break;

// // // // // // //     default:
// // // // // // //         console.log("Invalid Result");
// // // // // // // }

// // // // // // // example 3
// // // // // // // let status = 400;

// // // // // // // switch(status){
// // // // // // //     case 201:
// // // // // // //         console.log("Created");
// // // // // // //         break;

// // // // // // //     case 400:
// // // // // // //         console.log("Bad Request");
// // // // // // //         break;

// // // // // // //     case 403:
// // // // // // //         console.log("ForBidden");
// // // // // // //         break;

// // // // // // //     case 500:
// // // // // // //         console.log("Internal Server Error");
// // // // // // //         break;

// // // // // // //     default:
// // // // // // //         console.log("Invalid Status");
// // // // // // // }

// // // // // // // loop 
// // // // // // // for loop in JS

// // // // // // // for(let i = 0; i <= 10; i++){
// // // // // // //     console.log("I love JS" + i);
// // // // // // // }

// // // // // // // for(let i = 1; i<=9 ; i++){
// // // // // // //     console.log(i);
// // // // // // // } 

// // // // // // // for(let a = 1 ; a<= 10; a++){
// // // // // // //     console.log(`2 * ${a} = ${ 2 * a}`);
// // // // // // // }

// // // // // // // even number
// // // // // // // for(let i = 0; i<= 20; i++){
// // // // // // //     if(i%2 === 0){
// // // // // // //         console.log(`Even Numbers is: ${i}`);
// // // // // // //     }
// // // // // // // }

// // // // // // // for(let i = 0; i<= 20; i++){
// // // // // // //     if(i%2 === 1){
// // // // // // //         console.log(`Odd Numbers is: ${i}`);
// // // // // // //     }
// // // // // // // }


// // // // // // // array in JS

// // // // // // // const array = [2,4,4,6,7];
// // // // // // // let sum = 0;
// // // // // // // for(let i = 0; i < array.length; i++){
// // // // // // //     sum += array[i];
// // // // // // // }
// // // // // // // console.log(`The sum of Array: ${sum}`);


// // // // // // // while in JS
// // // // // // // let i = 0;
// // // // // // // while(i <= 10){
// // // // // // //     console.log(i);
// // // // // // //     i++;
// // // // // // // }

// // // // // // // do while in JS
// // // // // // // let i = 0;
// // // // // // // do{
// // // // // // //     console.log(i);
// // // // // // //     i++;
// // // // // // // }while(i<= 20);

// // // // // // // Array
// // // // // // // const array =[3,2,3,4,6,2, "box", "apple"]; //data structure to store a multiple value 
// // // // // // // console.log(array);
// // // // // // // console.log(array[3]);
// // // // // // // console.log(typeof array);


// // // // // // // length of an array
// // // // // // // const array =[3,4,5,3,2,1,4,5];
// // // // // // // console.log(array.length);

// // // // // // // push
// // // // // // // let result = array.push(34);
// // // // // // // console.log(array);
// // // // // // // console.log(result);

// // // // // // // pop ->removes data at present at last
// // // // // // // let arr = array.pop();
// // // // // // // console.log(array);


// // // // // // // shift
// // // // // // // array.shift();
// // // // // // // console.log(array);

// // // // // // // unshift
// // // // // // // array.unshift(100);
// // // // // // // console.log(array);

// // // // // // // includes
// // // // // // // let result = array.includes(3);
// // // // // // // console.log(result);

// // // // // // // join
// // // // // // // const output = ["Ajha","Pani","Parxha","Ra?"];
// // // // // // // console.log(output.join(" "));

// // // // // // // const array =[3,4,5,3,2,1,4,5];

// // // // // // // splice
// // // // // // // array.splice(2,5);
// // // // // // // console.log(array);

// // // // // // // slice
// // // // // // // let result = array.slice(1,4);
// // // // // // // console.log(result);

// // // // // // // indexof
// // // // // // // let output = array.indexOf(3);
// // // // // // // console.log(output);

// // // // // // // lastIndexOf
// // // // // // // let output = array.lastIndexOf(3);
// // // // // // // console.log(output);


// // // // // // // let arr = [];
// // // // // // // let sum = 0;
// // // // // // // for (let i = 1; i<=10; i++){
// // // // // // //     arr.push(i);
// // // // // // // }

// // // // // // // // console.log(arr);

// // // // // // // for(let i = 1; i<arr.length; i++){
// // // // // // //     sum += arr[i];
// // // // // // // }

// // // // // // // let result = sum *2;

// // // // // // // console.log(`The sum of the array is: ${sum}`);
// // // // // // // console.log(`The multiply of the array is: ${result}`);



// // // // // // // object in JS
// // // // // // // const person ={
// // // // // // //     name : "Ram Kc",
// // // // // // //     age : 24,
// // // // // // //     education : "BCA",
// // // // // // //     isMarried : false,

// // // // // // //     address: {
// // // // // // //         street :"Kalimati",
// // // // // // //         city: "Kathmandu",
// // // // // // //         country: "Nepal"
// // // // // // //     },

// // // // // // //     greet: function(){
// // // // // // //         console.log(`Hello My name is :${this.name}. And I am ${this.age}`);
// // // // // // //     },
// // // // // // // };

// // // // // // // const {
// // // // // // //     name,
// // // // // // //     age,
// // // // // // //     education,
// // // // // // //     isMarried,
// // // // // // //     address: {street,city,country},
// // // // // // // } = person;
// // // // // // // console.log(person);
// // // // // // // person.greet();
// // // // // // // console.log(name,age,education,isMarried,street,city,country);

// // // // // // // function in JS-> works as an input means takes parameters and output  , reuseability of piece of code

// // // // // // // function myFunction(){
// // // // // // //     console.log("This is a function");
// // // // // // // }
// // // // // // // myFunction()


// // // // // // // passing the parameters in a function
// // // // // // // function myFunction(a,b){
// // // // // // //     return a + b ;
// // // // // // // }
// // // // // // // let result = myFunction(6,7);
// // // // // // // console.log(`THe sum of the two numbers are: ${result}`);


// // // // // // // function myFunction(radius){
// // // // // // //     return Math.PI * radius * radius;
// // // // // // // }
// // // // // // // let result = myFunction(5);
// // // // // // // console.log(`THe area of the circle is : ${result}`);


// // // // // // // CalculateTotal
// // // // // // // function CalculateTotal(cartItems, taxRate){
// // // // // // //     let total = 0;
// // // // // // //     for (let i = 0; i<cartItems.length; i++){
// // // // // // //         total += cartItems[i].price * cartItems[i].quantity;
// // // // // // //     }
     
// // // // // // //     total += total * taxRate ;
// // // // // // //     return total;
// // // // // // // }

// // // // // // // let cart = [
// // // // // // //     {name : "Ram", price : 45000,  quantity : 5},
// // // // // // //     {name : "Sam", price : 5000,  quantity : 4},
// // // // // // //     {name : "Sita", price : 450000,  quantity : 5},
// // // // // // //     {name : "Hari", price : 300000,  quantity : 2},
// // // // // // // ];

// // // // // // // const result = CalculateTotal(cart , 0.02);
// // // // // // // console.log(`Your total payment is : ${result}`);


// // // // // // // // function
// // // // // // // function myFunction(){
// // // // // // //     let a = prompt("Enter first number");
// // // // // // //     let b = prompt("Enter second number");
// // // // // // //     let result = Number(a) + Number(b);
// // // // // // //     if(result){
// // // // // // //         alert(`The sum of two numbers are: ${result}`);
// // // // // // //     }
// // // // // // // }

// // // // // // // myFunction();


// // // // // // //Scoping
// // // // // // //global scope
// // // // // // // var x = 90;
// // // // // // // let y = 78;
// // // // // // // const z = 12;
// // // // // // // function myFunction(){
// // // // // // //     console.log(x,y,z);
// // // // // // // }
// // // // // // // myFunction();


// // // // // // // function scope
// // // // // // // function myFunction(){
// // // // // // //     var x = 90;
// // // // // // //     let y = 78;
// // // // // // //     const z = 12;
// // // // // // //     console.log(x,y,z);
// // // // // // // }
// // // // // // // myFunction();


// // // // // // // function myFunction(){
// // // // // // //     if(true){
// // // // // // //     var x = 90;
// // // // // // //     let y = 78;
// // // // // // //     const z = 12;
// // // // // // //     console.log(y); //let and const is a block scope can be used within { }
// // // // // // //     console.log(z);
// // // // // // //     }
// // // // // // //     console.log(x); //var is function scope
// // // // // // // }
// // // // // // // myFunction();

// // // // // // // DOM
// // // // // // // console.log(document.body); //document is the object of JS which help in accessing the element of an object

// // // // // // let result = document.getElementById("hello");
// // // // // // // console.log(result);

// // // // // // result.innerText ="I am learing JS";
// // // // // // result.style.backgroundColor = "yellow";
// // // // // // result.style.color = "green";
// // // // // // result.style.textAlign = "center";


// // // // // // let output = document.getElementsByClassName("myClass")[0]; //accessing using index
// // // // // // // console.log(output);

// // // // // // output.innerText ="I have a car";
// // // // // // output.style.backgroundColor = "orange";
// // // // // // output.style.color = "black";
// // // // // // output.style.textAlign = "center";


// // // // // // let ans = document.getElementsByClassName("myClass"); //accessing using index
// // // // // // // console.log(ans);

// // // // // // ans[1].innerText ="I hava a bus";
// // // // // // ans[1].style.backgroundColor = "blue";
// // // // // // ans[1].style.color = "white";
// // // // // // ans[1].style.textAlign = "center";


// // // // // // //span
// // // // // // let output1 = document.getElementsByTagName("span"); //accessing using index
// // // // // // // console.log(output1[0]);

// // // // // // output1[0].innerText ="Khana Khayou";
// // // // // // output1[0].style.backgroundColor = "green";
// // // // // // output1[0].style.color = "white";
// // // // // // output1[0].style.textAlign = "center";


// // // // // // let outputs = document.getElementsByTagName("span"); //accessing using index
// // // // // // // console.log(outputs[1]);

// // // // // // outputs[1].innerText ="Kata pauncha job?";
// // // // // // outputs[1].style.backgroundColor = "purple";
// // // // // // outputs[1].style.color = "white";
// // // // // // outputs[1].style.textAlign = "center";


// // // // // // let answer = document.getElementsByName("email"); //accessing using index
// // // // // // console.log(answer[0]);


// // // // // // let x = document.querySelector("#btnAdd");
// // // // // // x.style.backgroundColor = "green";
// // // // // // x.style.color = "white";
// // // // // // x.style.padding = "2vmax 4vmax";
// // // // // // x.style.cursor = "pointer";
// // // // // // x.style.border = "none";
// // // // // // // console.log(x);
// // // // // // x.setAttribute("class", "meroClass");
// // // // // // console.log(x.getAttribute("class"));

// // // // // // let y = document.querySelector(".btnDelete");
// // // // // // y.style.backgroundColor = "red";
// // // // // // y.style.color = "white";
// // // // // // y.style.padding = "2vmax 4vmax";
// // // // // // y.style.cursor = "pointer";
// // // // // // y.style.border = "none";
// // // // // // console.log(y);


// // // // // // // let display = document.createElement("h1");
// // // // // // // display.innerText = "This ia a new element";
// // // // // // // document.body.append(display);  //creating element in bottom
// // // // // // // document.body.prepend(display); //creating element in top

// // // // // // function addTask(){
// // // // // //     let display = document.createElement("h1");
// // // // // //     display.innerText = "This ia a new element";
// // // // // //     document.body.prepend(display); //creating element in top
// // // // // // }

// // // // // // function deleteTask(){
// // // // // //     let h1 = document.querySelector("h1");
// // // // // //     h1.remove();
// // // // // // }
// // // // // // x.onclick = addTask;
// // // // // // y.onclick = deleteTask;


// // // // // let result = document.querySelectorAll("button");
// // // // // result[0].innerText = "Add garni";
// // // // // result[0].style.backgroundColor = "green";
// // // // // result[0].style.color = "white";
// // // // // result[0].style.padding = "2vmax 4vmax";
// // // // // result[0].style.border = "none";
// // // // // result[0].style.cursor = "pointer";


// // // // // let output = document.querySelectorAll("button");
// // // // // output[1].innerText = "Delete garni";
// // // // // output[1].style.backgroundColor = "red";
// // // // // output[1].style.color = "white";
// // // // // output[1].style.padding = "2vmax 4vmax";
// // // // // output[1].style.border = "none";
// // // // result[1].style.cursor = "pointer";



// // // // // // console.log(result);

// // // // // function myFunction(name){
// // // // //     console.log(`My name is ${name}. And my age is ${age}`);

// // // // // }
// // // // // myFunction("Hari", 28);

// // // // const meroFunction = (name, age) => {
// // // //     console.log(`My name is ${name}. And my age is ${age}`);
// // // // };

// // // // meroFunction("Hari", 28);


// // // // Advanced Array method
// let newArray = [2,4,1,3,5,6,7,8,9];

// // // // find
// // // // let  output = array.find((value, index) => value > 6);
// // // // console.log(output);


// // // const products = [
// // //     {id :1, name:"hari" , price:4500, instock: true},
// // //     {id :2, name:"sam" , price:45300, instock: false},
// // //     {id :3, name:"sita" , price:20000, instock: true},
// // //     {id :4, name:"gopal" , price:10000, instock: true},
// // // ];
// // // let result = products.find((value, index)=> value.instock)
// // // console.log(result);


// // // filter


// // // let  output = newArray.filter((value, index) => value > 6);
// // // console.log(output);


// // // const products = [
// // //     {id :1, name:"hari" , price:4500, instock: true},
// // //     {id :2, name:"sam" , price:45300, instock: false},
// // //     {id :3, name:"sita" , price:20000, instock: true},
// // //     {id :4, name:"gopal" , price:10000, instock: true},
// // // ];
// // // let result = products.filter((value, index)=> value.instock)
// // // console.log(result);


//                                 // // some-> provides result in form of array
// // // let  output = newArray.some((value, index) => value > 6);
// // // console.log(output);


// // // const products = [
// // //     {id :1, name:"hari" , price:4500, instock: true},
// // //     {id :2, name:"sam" , price:45300, instock: false},
// // //     {id :3, name:"sita" , price:20000, instock: true},
// // //     {id :4, name:"gopal" , price:10000, instock: true},
// // // ];
// // // let result = products.some((value, index)=> value.instock)
// // // console.log(result);

// // // every
// // let  output = newArray.every((value, index) => value > 6);
// // console.log(output);


// // const products = [
// //     {id :1, name:"hari" , price:4500, instock: true},
// //     {id :2, name:"sam" , price:45300, instock: true},
// //     {id :3, name:"sita" , price:20000, instock: false},
// //     {id :4, name:"gopal" , price:10000, instock: true},
// // ];
// // let result = products.every((value, index)=> value.instock)
// // console.log(result);


//                             // forEach (cannot return array or simply cannot change the array )

// // let  output = newArray.forEach((value, index) => value * 2);
// // console.log(output);

// // const products = [
// //     {id :1, name:"hari" , price:4500, instock: true},
// //     {id :2, name:"sam" , price:45300, instock: false},
// //     {id :3, name:"sita" , price:20000, instock: true},
// //     {id :4, name:"gopal" , price:10000, instock: true},
// // ];
// // let result = products.forEach((value, index)=> value.instock)
// // console.log(result);


//                                     // map 

// // let  output = newArray.map((value, index) => value > 6);
// // console.log(output);


// // const products = [
// //     {id :1, name:"hari" , price:4500, instock: true},
// //     {id :2, name:"sam" , price:45300, instock: false},
// //     {id :3, name:"sita" , price:20000, instock: true},
// //     {id :4, name:"gopal" , price:10000, instock: true},
// // ];


// // let result = products.map((value, index)=> value.instock)
// // console.log(result);
// // let outputs = document.createElement("h2");
// // outputs.innerText = result;
// // document.body.prepend(outputs);



//                        // reduce (used for the calculation of sum and provide the result in a single unit)
// let  output = newArray.reduce((accum, curValue) => accum + curValue);
// console.log(output);  //single return element


// const products = [
//     {id :1, name:"hari" , price:4500, instock: true},
//     {id :2, name:"sam" , price:45300, instock: true},
//     {id :3, name:"sita" , price:20000, instock: true},
//     {id :4, name:"gopal" , price:10000, instock: true},
// ];


// let result = products.reduce((total, curValue) => total + curValue.price, 0);
// console.log(result);


let heading = document.getElementById("heading");
let div1 = document.getElementById("div1");
let btnClick = document.getElementById("btnClick");

// event listener is the function in js

btnClick.addEventListener("click", () => {
    console.log("Clicked!");
});