//Javascript Datatypes
//1.primitives datatypes
//1.non-primitive datatypes

//====primitive datatypes====
//this daatypes are immutable(cannot be changed) and stored in stack memory at a single location
//we can store only one value at a time in primitive datatypes
//1.number
//2.string
//3.boolean
//4.undefined
//5.null
//6.symbol

//====non-primitive datatypes====
//this datatypes are mutable(can be changed) and stored in heap memory at multiple locations
//we can store multiple values at a time in non-primitive datatypes
//1.object
//2.array
//3.function

//##########################################################
//1.number:- number datatype is used to store numeric values in javascript
var num1=10;
var num2=20.5;
console.log(num1);
console.log(num2);

//2.string:- when we want to store text values in javascript we use string datatype
var str1="Hello";
var str2='World';
console.log(str1);
console.log(str2);
//string following indexes starting from 0
var str3="Deepak";
console.log(str3[0]);

//3.boolean:- boolean datatype is used to store true or false values in javascript
var bool1=true;
var bool2=false;
console.log(bool1);
console.log(bool2);

//4.undefined:- undefined datatype is used to store undefined values in javascript
var und1;
console.log(und1);

//5.null:- null datatype is used to store null values in javascript
var null1=null;
console.log(null1);

//6.symbol:- symbol datatype is used to store unique values in javascript
var sym1=Symbol("Deepak");
var sym2=Symbol("Deepak");
console.log(sym1==sym2);

console.log("########non-primitive datatypes#########");
//Arrey:- array datatype is used to store multiple values in javascript
//we can modify and update values from arrey
//aarray following indexes starting from 0
//array can store multiple values of different datatypes
//array can be created using array literal or array constructor
//array literal
var arr1=[1,2,3,4,5,false,"Deepak",true];
console.log(arr1); 
console.log(arr1[5]);    

console.log("#########object datatype#########");
//object:- object datatype is used to store multiple values in javascript
//we can modify and update values from object
//object can store multiple values of different datatypes   
//duplicate keys are not allowed in object
//object can be created using object literal or object constructor
//object literal    
//object is a collection of key-value pairs
var obj1={
    name:"Deepak",
    age:25,
    email:"deepak@example.com"
};
console.log(obj1);
console.log(obj1.name);
obj1.address="Hyderabad";
console.log(obj1["address"]);

