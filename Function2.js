/*var x= function(a,b)// addition
{
    return a+b;
}
var z=x(10,20);
console.log(z);*/
/*function multiply(a,b)// multiply
{
    return a*b;
}
var x=multiply(10,20);
console.log(x);*/
var myfunction=new Function("a","b","return a*b");
var z=myfunction(10,30);
console.log(z);
