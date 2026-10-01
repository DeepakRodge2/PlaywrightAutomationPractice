//Exeception handling in javascript
//exeception handling is a mechanism to handle runtime errors in a graceful manner, allowing the program to continue executing instead of crashing. In JavaScript, this is typically done using try-catch-finally blocks.
try {
    // Code that may throw an exception
} catch (error) {
    // Code to handle the exception
    console.error("An error occurred:", error.message);
} finally {
    // Code that will always execute, regardless of whether an exception occurred or not
    console.log("Execution completed.");
}   

function exceptionError(a){
    try{
        var c=a+b;
        console.log(c)

    }catch(error){
        console.error("variable are avilabe");
        console.log("Error message:", error.message);
    }
    //code outtside the try-catch block will continue to execute even if an exception occurs within the try block.
    console.log("Execution completed.");
}
exceptionError(10)
console.log("#########################################")

var a =10;
try{
    if (a>b)
    {
        console.log("a is greater than b");
    }}
    catch(error){
        console.log("variable are not defined");
        console.log("Error message:", error.message);
    }

    console.log("Execution completed.");

    console.log("#########################################")
    //exception hadling with finally block
    function exceptionErrorWithFinally(a,b){
        try{

            var c=a+b;
            console.log("RESULT OF C:",c);

            var d=10;
            var e=20;
            var f=d+e+g;
            console.log("RESULT OF f",f);

        }catch(error){

            console.log("error in file :",error.name)
            console.log("error message:",error.message)

        }finally{
            //finally block will always execute regardless of whether an exception occurred or not.
            var n=10;
            for(var i=0;i<=n;i++)
            {
                console.log(i,"*",n,":",i*n)

            }

        }

    }
    exceptionErrorWithFinally(20,30)

    console.log("#########################################");

    //throw error on condition basis
     function validateAge(age){
        try{
        if(age<18){
            throw new Error("Age must be 18 or older.");
        }
     }   catch(error){
        console.error("Validation error:", error.message);
     }
    }
    validateAge(15); // This will throw an error and be caught in the catch block   

    console.log("#########################################");
    //nested exception handling
    function nestedExceptionHandling(a,b){
        try{
            var c=a+b;
            console.log("RESULT OF C:",c);  
            try{
            var d=10;
            var e=20;
            var f=d+e;
            console.log("RESULT OF f",f);
            }
            catch(error){
            console.error("Error in inner try block:", error.message);
            }
        }
        catch(error){
            console.error("Error in outer try block:", error.message);
        }
    }
    nestedExceptionHandling(20,30);

console.log("#########################################");

function nestedblock(a,b,c)
{
    try {
        output=a+b;
        console.log("output:",output);
        try{
        var d=10;
        var e=20;
        var f=d+e+g;
        console.log("RESULT OF f",f);
        }
        catch(error){
        console.error("Error in inner block:", error.message);
        }
    }
    catch(error){
        console.log(("error in outer block:",error.message));
    }
    }
nestedblock(20,30);

console.log("#########################################");

function login(username,password)
{
    var dbusername="admin";
    var dbpassword="admin123";
    try{
        if(username==dbusername && password==dbpassword)
        {
            console.log("Login successful.");
        }
        else
        {
            throw new Error("Invalid username or password.");
        }
    }
    catch(error){
        console.error("Login error:", error.message);
    }
}
login("admin", "admin123");
     
