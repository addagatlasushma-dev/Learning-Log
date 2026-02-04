console.log("Hey sushi");    
let a=10;
console.log(a);
let pencilCost=10;
let eraserPrice=5;
console.log(`The total price is ${pencilCost + eraserPrice}`);

let age=20;
if(age>=18){
    console.log("Can Vote");
}
else{
    console.log("Cannot vote")
}

// create a traffuc light system 
let go="green";
let getReady="yellow";
let stop="red";
let light="green";
if(light=="red"){
    console.log("stop");
}
else if(light =="yellow"){
    console.log("get ready");
}
else if(light=="green"){
    console.log("Go");
}


//
let size='S';
if(size=="XL"){
    console.log(`Price is 250`);
}
else if(size=="L"){
    console.log(200);
}
else if(size=="M"){
    console.log("100");
}
else if(size=="S"){
    console.log(50);
}

//good string
let checkString="frdtfyuu";
if(checkString[0]=='a' && checkString.length>3){
    console.log("Good String")
}
else{
    console.log("Not a good string");
}

//p
let day="1";
switch(day){
    case 1 :
        console.log("monday");
        break;
    case "2": 
        console.log("tuesday");
        break;
    case "3":
        console.log("wednesday");
        break;
    case "4":
        console.log("thursday");
        break;
    case "5":
        console.log("friday");
        break;
    case "6":
        console.log("saturday");
        break;
    case "7":
        console.log("Sunday");
        break;
    default:
        console.log("enter valid number");
}

//alert & prompt
// alert("something is wrong!");
// prompt("please enter your name");

// let firstname=prompt("enter your fisrtname");
// let lastName=prompt("enter your last name");
// console.log(firstname + " "  + lastName);

//practice 2
let number=1290;
if(number%10===0){
    console.log("good");
}
else {
    console.log("bad");
}

let namee=prompt("Enter you name");
let agee=prompt("enter your age");
alert(`${namee} is ${agee} years old.`);

let Quarter=3;
switch(Quarter){
    case 1:
        console.log("January,February,March");
        break;
    case 2:
        console.log("April,May,June");
        break;
    case 3:
        console.log("July,Augut,September");
        break;
    case 4:
        console.log("October,november,december");
        break;
    default:
        console.log("Enter a valid number");
}

//
let st="aertdfyug";
if((st[0]==='a' || st[0]==='A') && st.length>5){
    console.log("Golden String");
}
else{
    console.log("Not a golden string");
}

//largest of 3
let num1=23;
let num2=888;
let num3=12;
if(num1>num2 && num1>num3){
    console.log(num1);
}
if(num2>num1 && num2>num3){
    console.log(num1);
}
if(num3>num1 && num3>num2){
    console.log(num4);
}

//
let num8=2440;
let num88=1344334;
if(num8%10==num88%10){
    console.log("same last digit");
}
else{
    console.log("doff last digit");
}