function additon(n1:number,n2:number):number
{

    //console.log("addition of value :",n1+n2)
    return n1+n2;

}
var result=additon(30,40)
console.log("result of addition :",result)

function greetting(name:string):string
{
    console.log("name is :",name)
    return name;

}
console.log("#######################################")

var Arrowfuncion=(v1:number,v2:number):number =>
{
    return v1*v2
}
console.log(Arrowfuncion(20,20));

//write a program to find the prime number from given array of numbers using arrow function
var numbers:number[]=[2,3,4,5,6,7,8,9,10,11,12,13,14,15]  
const primeNumbers=numbers.filter((num:number):boolean=>{
    for(let i=2;i<num;i++)
    {
        if(num%i===0)
        {
            return false;
        }
    }
    return num>1;
}   )
console.log("Prime numbers:", primeNumbers);

var numbers2:number[]=[2,3,4,5,6,7,4,68,9,23,25]
const evennumber=numbers2.filter((num:number):boolean => num % 2 === 0)
console.log("Even numbers:", evennumber);

console.log("#######################################")

interface User {
    name: string;
    age: number;
    email: string;
    isLoggedIn: boolean;
}   

const user1: User = {
    name: "Deepak",
    age: 25,
    email: "deepak@example.com",
    isLoggedIn: true
}
console.log("User details:", user1);

const user2: User = {
    name: "Raj",
    age: 30,
    email: "raj@example.com",
    isLoggedIn: false
}
console.log("User details:", user2);

const user3: User = {
    name: "Kumar",
    age: 28,
    email: "kumar@example.com",
    isLoggedIn: true
}
console.log("User details:", user3);
