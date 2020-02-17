var person={firstName:"feroz",last:"khan",Fn:function()
{
    return this;
}};
console.log(person);
console.log(person.firstName);
console.log(person["last"]);
var result=person.Fn();
console.log(result);

/*var x=function()
{
    return this;
}
var result=x();
console.log(result);
*/