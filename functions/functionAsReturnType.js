function myfunction()
{

    console.log("My own function");
    return function(x,y)
    {
        return x*y;
    }
}
var newFunction=myfunction();
console.log(newFunction);
var multiplication=newFunction(10,20);
console.log(multiplication);
