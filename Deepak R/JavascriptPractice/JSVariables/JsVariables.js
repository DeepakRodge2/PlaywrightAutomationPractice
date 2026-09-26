//var variables
//it can be redeclared and reassigned
//it has function scope

var a= 10;
console.log(a);
var a=20;
a=30;
console.log(a);
//let variables
// it cannot be redeclared but can be reassigned
//it has block scope
//it cannot be redeclared in the same scope but can be declared in different scopes
let num=10;
console.log(num);
num=500;
console.log(num);

//it has block scope
if(true)
{
let USERNAME= "Deepak";
var email="Deepak@gmail.com";
    console.log(USERNAME);
    console.log(email);
    USERNAME="Reddy";
   // console.log(USERNAME);

};
//console.log(USERNAME);
console.log(email);

//const variables
//it cannot be redeclared and reassigned
//it has block scope
//it cannot be redeclared in the same scope but can be declared in different scopes
//it is used to declare constants
//it has block scope
const PI=3.14;
console.log(PI);
