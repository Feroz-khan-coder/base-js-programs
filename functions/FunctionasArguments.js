function myfunction(a,b,fun)
{
    console.log("Hello");
    return fun(10,20);
}
function displayFunction(a,b)
{
    dontDisplay();
    return a*b;
}
function dontDisplay()
{
    console.log("Ya this way only i want");
}
var resl=myfunction(10,20,displayFunction);
console.log(resl);