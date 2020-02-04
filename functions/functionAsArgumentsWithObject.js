function myfunction(a,b,obj)
{
    console.log("Start of life");
    return obj(10,20);
}
function object1(a,b)
{
    console.log("Second part");
    return a*b;
}
var object={rollNo:1101,name:"john",age:28,gender:"male"};
var newObject=myfunction(10,20,object1);
console.log(newObject);