/*var tem=[25,4,9,16];
var result1=function(num)
{
    return num*17;
}
var result2=tem.map(result1);
console.log(result2);*/
/*var squareRoot=function()
{
    //console.log();
}*/
//var result=tem.map(Math.sqrt);
//console.log(result);

/*var result=function(num)
{
    return num*10;
}
var number = [12,23,12,2,4,6,7];
var result2=number.map(result);
console.log(result2);*/ 

/*function myfunction()
{
    var counter=0;
   return counter=counter+1;
}
//console.log(counter);
var x=myfunction();
var y=myfunction();
var z=myfunction();
console.log(z);*/

/*var add = (function () {
    var counter = 0;
    return function () 
    {
        counter += 1; return counter;
    }
  })();*/
//var addition=add();
//console.log(add);

function f1(a,b)
{
    var z=a+b;
    return function f2()
    {
        console.log(z);
        return z;
         
    }
}
var x=f1(12,23);
var y=x();
console.log(y);




