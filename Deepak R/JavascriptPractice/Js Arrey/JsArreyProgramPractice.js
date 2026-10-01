//write a program to get combination of two numbers from arrey whos sum is 10
var arr1=[1,4,6,7,3,8,2]
output=[];
for(var i=0;i<arr1.length;i++)
{
    for(var j=i+1;j<arr1.length;j++)
        if((arr1[i] + arr1[j])==10)
        {
            output.push([arr1[i],arr1[j]])
        }
}

console.log("output :",output)
//write a program to get square of all even value and cube of odd value
 //from arrey
 var arr=[2,3,4,5,6,7,8]
 let result=[];
 for(var i=0;i<arr.length;i++)
 {
    if (arr[i]%2==0)
    {
        result.push(arr[i]**2)
    }
    else
    {
        result.push(arr[i]**3)
    }
 }
 console.log("result :",result)

 //find the greatest that 10 
  var arr2=[9,12,5,13,50,11]
  var greater=[];
  for(var i=0;i<arr2.length;i++)
  {
    if(arr2[i]>10)
    {
        greater.push(arr2[i])
    }
  }
  console.log("greates numbers is :",greater);

  console.log('################################')

  var arr3=[2,4,6,3,5,7]
   var evencount=0;
   var oddcount=0;
   for(var i=0;i<arr3.length;i++)
   {
    if(arr3[i]%2==0)
    {
        evencount++
    }
    else
    {
        oddcount++

    }
   }
   console.log("even count is :",evencount);
   console.log("odd count is :",oddcount);

   console.log("#################################")
   //find the positive and negetive numbers form arry
   var arr4=[2,-3,5,-10,11,-13]
   var positivenumbers=[];
   var negetivernumber=[];
   for(var i=0;i<arr4.length;i++)
   {
    if(arr4[i]>0)
    {
      positivenumbers.push(arr4[i])

    }
    else {
        negetivernumber.push(arr4[i])
    }
   }
   console.log("positive numbers is :",positivenumbers);
   console.log("negetive number is :",negetivernumber);

   var arr5=[2,3,4,5,6,7,8,9,10]
   var evencount=[];
   var oddcount=[];

   for(var i=0;i<arr5.length;i++)
{
    if(arr5[i]%2==0)
    {
        evencount.push(arr5[i])
    }
    else{
        oddcount.push(arr5[i])
    }
}
console.log("evencount is :",evencount)
console.log("oddcount is :",oddcount)

var arr6=[2,3,4,5,6,6]
var sum=0;
for(var i=0;i<arr6.length;i++)
{
    sum=sum+arr6[i]
}
console.log("sum of all element is",sum)

//find the duplicate element

var arr7=[2,3,2,4,3,5,2]
for(var i=0;i<arr7.length;i++)
{
    for(var j=i+1;j<arr7.length;j++)
    {
        if(arr7[i]==arr7[j])
        {
            console.log("duplicate elemets is",arr7[i])
        }
    }
}
let arr8 = [10, 20, 30, 20, 40, 10, 50];

for (let i = 0; i < arr8.length; i++) {

    for (let j = i + 1; j < arr8.length; j++) {

        if (arr8[i] === arr8[j]) {
            console.log("Duplicate =", arr8[i]);
        }
    }
}
