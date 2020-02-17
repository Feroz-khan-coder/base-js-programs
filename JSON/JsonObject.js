/*var myObject={name:"John",age:23,city:"New York"};
var myJSON=JSON.stringify(myObject);
console.log( myJSON);*/

var myJSON = '{"name":"John", "age":31, "city":"New York"}';
var myObj = JSON.parse(myJSON);
console.log(myObj);