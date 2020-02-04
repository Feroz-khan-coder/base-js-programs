function myfunction(a,b,array)
{
    console.log("Start of the day");
    var arr2 = displayArray(array);
         return array.pop();
}
function displayArray(array1)
{
    console.log("return statements");
    array1.push("lemon");
    
}
var fruits=["apricot","avocado","lychee","fig","lime"];
var newArray=myfunction(10,20,fruits);
console.log(newArray);
console.log(fruits);