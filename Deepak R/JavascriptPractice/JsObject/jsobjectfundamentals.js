//object data types store vaule in key value pair
//objetc data types is mutable in nature
//object data does not contains duplicates key
//object data can contain duplicate value
//object data store in an curly braces

const obj={
       firstname:"Rohit",
       lastname:"sharma",
       email:"rohitsharma@gmail.com",
       phone:"56565757575",
}
console.log(obj)
//get specific infor using key
console.log(obj.firstname);
console.log(obj.lastname);

//add new pair to existing obj
obj['address']='pune,baner'
obj.country='india'
console.log(obj)
//remove data from the object
delete obj.phone
console.log(obj)

//duplicates key not allowed
//if we added duplicates key in object it will consider only latest value

//update exsisting value
obj.email="rohitshrma1@gmail.com"

console.log(obj)

var ITCompany={
    HR:[
        {
            name:"Rohit", email:"rohit@gmail.com",phone:"544545454",
             name:"Rahul", email:"rahul@gmail.com",phone:"54454585"
        }
    ],
    Devloper:[
        {
             name:"pankaj", email:"pankaj@gmail.com",phone:"54492929"
        }
    ],
    Tester:[
        {
             name:"Suraj", email:"Suraj@gmail.com",phone:"123456777"
        }
    ]

}
console.log(ITCompany.Devloper[0].phone)

console.log("##################Methods########################")
//keys and values :-it return  arreys of 
// keys and values from given objects
var obj1={ a:555,b:666,c:777,d:888}
console.log("all keys :",Object.keys(obj1))
console.log("all vlaues :",Object.values(obj1))

console.log("#########entries method########")
var obj2={ a:555,b:666,c:777,d:888}
console.log(Object.entries(obj2))
//iterate through all value of object

for(var data of Object.entries(obj2))
{
    console.log(data)
}
console.log("###########################################")
var fruitinventory={Apple:100,Banana:500,Mango:400,Watermelon:600,Lichi:500}
//write a programm to calculate the total bill of fruit purchase
var fruiteprice={ Apple:50,Banana:30,Mango:45,Watermelon:60,Lichi:70}
var fruitpurchase={Apple:15,Banana:10,Mango:5,Watermelon:3,Lichi:20}
var total_bill=0;

for(var[fruitname,fruitQunt]of Object.entries(fruitpurchase))
{
    var FPrice= fruiteprice[fruitname]
    var Fbill= FPrice*fruitQunt
    console.log(fruitname,fruitQunt,FPrice,Fbill)
    total_bill=total_bill+Fbill;
    fruitinventory[fruitname] = fruitinventory[fruitname] - fruitQunt;

}
console.log("total bill :",total_bill)
console.log("inventory",fruitinventory)

var ITcompany1={

    Admin:{

        name:"rohit",age:24,phone:252525252525

    },

    Development:{

        QA:{
             name1:"deepak",Age1:26,email1:"deepak@gmail.com",
            name2:"suraj",Age2:29,email2:"suraj@gmail.com"
        }
    }
}
console.log(ITcompany1.Development.QA)
console.log(ITcompany1.Admin.phone)

console.log("#######################assign method##########################")
//assign method :-combine multiple object value and create new object
var obj1={a:100,b:200}
var obj2={c:300,d:400}
var obj3={e:500,f:600}

var result=Object.assign({},obj1,obj2,obj3)
console.log("result :",result)

console.log("######################freeze#################")
//object.freeze method: this method prevent modification in object.
var Employee={
    name:'Charan',
    empid:123,
    email:'charan@gmail.com'
}

Object.freeze(Employee)//will freeze the objects

Employee.address1="Pune,baner"

console.log(Employee)

console.log("#####################seal method############")
//object.seal():-Allow updating  the existing properties and prevent add/remove from data types
var Employeenew={
    name:'Charan',
    empid:123,
    email:'charan@gmail.com'
}
Employeenew.empid=321//update existing value
console.log(Employeenew)



