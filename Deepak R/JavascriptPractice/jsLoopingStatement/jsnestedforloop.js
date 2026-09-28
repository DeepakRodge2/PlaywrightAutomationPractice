//nested for loop
//nested for loop is a loop inside another loop. The inner loop will be executed one time for each iteration of the outer loop.
//outer loop will be executed first and then inner loop will be executed. The inner loop will be executed for each iteration of the outer loop.
for(var i=1;i<=5;i++)//outer loop
{
    console.log("address: "+i);
    for(var j=1;j<=3;j++)//inner loop
    {
        console.log("package: "+j);
    }
    console.log("______________________________")
}      
var num=12;
var prime=true;
for(var i=2;i<num;i++)
{
    if(num%i===0)
    {
        prime=false;
        break;
    }
    else{
        continue;
    }
}
if(prime)
{
    console.log(num+" is a prime number");
}
else
{
    console.log(num+" is not a prime number");
}