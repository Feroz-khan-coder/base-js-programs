/*var result= function(a,b)
{
    return a*b;
}
var x=result(10,2);
console.log(x);*/

/*var myFunction=new Function("a","b","return a*b");
var result=myFunction(10,22);
console.log(result);*/

/*console.log(x);
var x=5;*/

var x=(function(func)
{
    //return func(10,20);
    console.log("Hello");
    return display(10,20);
    
}
)(displayAll);
function display(a,b)
{
 return a*b;
}
console.log(x);
function displayAll(c,d)
{
    return c+d;
}