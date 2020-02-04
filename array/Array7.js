var fruits=["apple","apricot","avocado","banana","blackcurrent","blackberry","blueberry","cherry","coconut","fig"];
/*console.log(fruits);
console.log(fruits.toString());
console.log(fruits.join(" & "));
console.log(fruits.pop());
console.log(fruits.toString());*/

function removepop(array)
{
   return array.pop();
}
console.log(removepop(fruits));
function addpush(array)
{
    return array.push("fig");
}
console.log(addpush(fruits));
console.log(fruits.toString());