//Js datatypes conversion
//implicit conversion:- when we convert one datatype to another datatype automatically by javascript engine
var num1=10;
var str1="Deepak";
var result=num1+str1;
console.log(result);
console.log(typeof result);
//explicit conversion:- when we convert one datatype to another datatype explicitly by using built-in functions
var num2=10;
var str2="20";
var result1=num2+Number(str2);
console.log(result1);
console.log(typeof result1);