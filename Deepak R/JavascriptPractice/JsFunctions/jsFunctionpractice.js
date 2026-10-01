//function
//funnction is a block of code that can be reused multiple times in a program. It is a set of statements that performs a specific task or calculates a value. Functions can take inputs, called parameters, and can return an output. They help in organizing code, making it more readable and maintainable.
//syntax: function functionName(parameters){ //code to be executed }
//example: function to add two numbers  
function addNumbers(a, b) {
    return a + b;
}

function greetings(msg){
    console.log(msg);
}
greetings("Hello, welcome to the world of functions!");
greetings("hello,good morning");
greetings("hello,good afternoon");
greetings("hello good evening")

//pass by refrench
var x="india has beast crickt team in the world"
greetings(x);

function addition(n1,n2,n3)
{
    console.log(n1+n2+n3)
}
addition(20,20,20);


function getFactorial(num)
{
    var fact=1;
    for( var i=num;i>0;i--)
    {
        fact*=i;

    }
    console.log("factorial of number is :",num,fact)
}
getFactorial(5)
getFactorial(10)

console.log("######################################");
//function with defualt parameters
 function multiply(x1,x2=30)
 {
    console.log(x1*x2)
 }
multiply(5);

//x1=10 and x2 will override the defulet value x2=20;

multiply(10,20)

console.log("#########################");
//function with return type value

function sumofvalue(range)
{ 
    var sum=0;
    for(var i=0;i<=range;i++)
    {
        sum+=i;
       
    }
    return sum
}
var output=sumofvalue(20)
console.log("output :",output)

console.log("###########################")
//function with multiple return values

function mathoprations(v1,v2,v3)
{
    var add=v1+v2;
    var multipple=v2+v3;
    var division=v3/v1;


return[add,multipple,division]
}
var result=mathoprations(30,40,60)
console.log(result)

function multipleoperation(v1,v2,v3,v4)
{
    var add1 =v1+v2;
    var add2= v2+v3;
    var add3=v3+v4;

    return[add1,add2,add3]
}
var output1=multipleoperation(12,12,12,12)
console.log(output1);

console.log("########################")
function deepak(msg)
{
    console.log(msg)
}
deepak("hello i am deepak");

//function with defualt parameters

function deepak2(x1,x2=500)
{
    console.log (x1*x2)
}
 deepak2(500)

 var x3=500;
 var x4=500;
 deepak2(x3,x4)
console.log("########################")
 function checkevenodd(num)
 {
    if(num%2==0)
    {
       return num +" is even number"
    }
    else{
        return num +"is odd number"
    }
 }
    var result1= checkevenodd(14)
    console.log(result1)
console.log("#################################")
    function printevenvalue(range)
    {
        for(var i=0;i<=range;i++)
        {
            if(i%2==0)

        console.log(i)
        }
    }
       printevenvalue(20)
console.log("##########################")
       function division(num)
       {
        for (var i=0;i<=num;i++)
        {
            if (i%5==0 && i%7==0)
            {
                console.log(i)
            }
        }
       }
       division(100)
   console.log("#####################################")
   //arrow function:-this function is an anonyms function that does not have
   //name we can store fucntion refrence in variable and use it 
   var cubevalue=(num)=>
   {
    return num**3

   }
   console.log(cubevalue(5))


   var factorial=(n)=>
   {
    fact =1
    for(var i=n;i>0;i--)
    {
        fact*=i
   }
   return fact
}
   var result=factorial(5)
   console.log(result)

   console.log("###########################")

   function addition(n1,n2)
   {
    return n1+n2;
   }

   function substract(n1,n2)
   {
    return n1-n2;
   }

   function multi(n1,n2)
   {
    return n1*n2
   }
   function division(n1,n2)
   {
    return n1/n2
   }
   function calculator(x1,x2,op)
   {
    if(op==1)
    {
        console.log("addition :",addition(x1,x2))
    }
    else if(op==2)
    {
        console.log("substraction :",substract(x1,x2))
    }
    else if(op==3)
    {
        console.log("multiplication :",multi(x1,x2))
    }
    else if(op==4)
    {
        console.log("division :",division(x1,x2))
    }

    
   }
    calculator(5,5,3);

    
