//for loop
//for loop is used to execute a block of code repeatedly until a specified condition is true. It consists of three parts: initialization, condition, and increment/decrement.
//syntax: for(initialization; condition; increment/decrement){ //code to be executed }
//example: print numbers from 1 to 10

for(var i=1;i<=10;i++)
{
    console.log(i);
}
//program to print multiplication table of a number
var num=7;
for(var j=1;j<=10;j++)
{
    console.log(j ,"*",num,"=",j*num);
}
//write a program to print even numbers from 1 to 50
for (var i=1;i<=50;i++)
{
    if(i%2===0)
    {
        console.log(i);
    }
}

var sum=0;
for(var i=1;i<=10;i++)
{
    sum+=i;
}
console.log(sum);