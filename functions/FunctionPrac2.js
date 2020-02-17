/*function myfunction(x,y=10)
{
    if(y=== undefined)
    {
            y=0;
        console.log("Please enter second parameter");
    }
    return x*y;
}
var t=myfunction(10,4);
console.log(t);*/

var i;
var max=-Infinity;
function myfunction()
{
    for(i=0;i<arguments.length; i++)
    {
        if(arguments[i]>max)
        {
        max=arguments[i];
        }
    }
    return max;
}
var result=myfunction(19,12,23,34,4,45,56,35);
console.log(result);