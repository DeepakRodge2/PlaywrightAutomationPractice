//write a programm to calculate the  average marks of each student from given detail.
var school={
    std1:[55,65,45,78,89,99],
    std2:[75,89,50,79,87,90],
    std3:[53,67,42,76,82,97],
    std4:[34,61,41,72,84,96],
    std5:[56,62,43,79,82,94]
}
for(var [stdid,marks] of Object.entries(school))
{
    var sum=0;
    for(var mark of marks)
    {
        sum+=mark;
    }
    var average=sum/marks.length
    
    console.log("studid :",stdid,"marks average :",average)

}
console.log("#########################################")
var obj3={
    a:120,
    b:50,
    c:150,
    e:5
}
var output={};

for (var[key,value]of Object.entries(obj3))
{
    if (value>100)
    {
        output[key]= value*5;
    }

else if(value<100)
{
    output[key]=value*50


}}
console.log(obj3)
console.log(output)

console.log("#############################################")

var patient={
    id:501,
    name:'emma',
    room:102,
    discargedate:"15-Aug-2026"
}
patient.diagnosis='malaria'
console.log(patient)
patient.room=103
console.log(patient)

delete patient.discargedate
console.log(patient)

console.log("#######################################")
var employee=
{
    emp1:{
        name:'sagar',
        exp: 5,
        salary:6000

    },
    emp2:{
          name:'shubham',
        exp: 6,
        salary:20000

    },
    emp3:{
        
          name:'suraj',
        exp: 4,
        salary:40000

    },
    emp4:{
        
          name:'raghav',
        exp: 7,
        salary:50000


    }
}
for(var[empid,details]of Object.entries(employee))
{
    if(employee.exp>5)
    {

    }
}

