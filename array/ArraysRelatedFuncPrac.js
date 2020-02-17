 ////  1) USING forEach() FUNCTIONS////
/*var fruits=["apricot","avocado","cherry","fig","kiwi","lychee","nectarine","passion fruit","peach","pear","plum"];
fruits.forEach(function(index, item,)
{
    console.log(item, index);
});
*/

/*var fruits=["plum","passion fruits","lychee","nectarine","peach","pear","fig"];
fruits.forEach(function(index, item)
{
    console.log(item, index);
});*/

///2) USING PUSH()////

/*var fruits=["plum","passion fruits","lychee","nectarine","peach","pear","fig"];
var newFruitsList=fruits.push("kiwi");
console.log(newFruitsList);
console.log(fruits);*/

/// 3). USING toString()////
/*var fruits=["plum","passion fruits","lychee","nectarine","peach","pear","fig"];
console.log(fruits.toString());*/

/// (4).USING POP ///
/*var fruits=["plum","passion fruits","lychee","nectarine","peach","pear","fig"];
console.log(fruits.pop());
console.log(fruits);*/


/// (5).USING SHIFT ////
/*var fruits=["plum","passion fruits","lychee","nectarine","peach","pear","fig"];
console.log(fruits.shift());
console.log(fruits);*/

/// (6).USING UNSHIFT///
/*var fruits=["plum","passion fruits","lychee","nectarine","peach","pear","fig"];
console.log(fruits.unshift("strawberry"));
console.log(fruits);*/

///(7).USING indexOF()///
/*var fruits=["plum","passion fruits","lychee","nectarine","peach","pear","fig"];
console.log(fruits.indexOf("lychee"));*/

///(8),USING SPLICE()///
/*var fruits=["plum","passion fruits","lychee","nectarine","peach","pear","fig"];
console.log(fruits.splice(5,1,"lemon","lime"));
console.log(fruits);*/

///(9),USING slice///
/*var fruits=["plum","passion fruits","lychee","nectarine","peach","pear","fig"];
console.log(fruits.slice(0,3));*/   

///(10)USING CONCAT///
/*var fruits=["plum","passion fruits","lychee","nectarine","peach","pear","fig"];
var person=["ok","done"];
var human=["no","iamnot"];
var mixtur=fruits.concat(person,human);
console.log(mixtur);*/

///(11)constructor property ////
/*var fruits=["plum","passion fruits","lychee","nectarine","peach","pear","fig"];
console.log(fruits.constructor);*/

///(12) USING copyWithin();
/*var fruits=["plum","passion fruits","lychee","nectarine","peach","pear","fig"];
console.log(fruits.copyWithin(2,4));*/

///(13) USING Object.entries(ARRAY) ///
/*var fruits=["plum","passion fruits","lychee","nectarine","peach","pear","fig"];
console.log(Object.entries(fruits));*/

///(14) USING fill()////
/*var fruits=["plum","passion fruits","lychee","nectarine","peach","pear","fig"];
//console.log(fruits.fill("kiwi"));
console.log(fruits.fill("kiwi",2,4));
console.log(fruits);*/

/////////////////////////////////////(15) USING filter ////
/*var age=[12,23,34,45,1,2,7];
var result=age.filter(function(age1)
{
    return age1>30;
});
console.log(result);
*/
////////////////////////////////////(16) USING find()////

/*var age=[12,23,34,45,1,2,7];
var result=age.find(function(age1)
{
    return age1>30;
});
console.log(result);*/

/// ///////////////////////////////////(17) USING findIndex()////////
/*var age=[12,23,34,45,1,2,7];
var result=age.findIndex(function(age1)
{
    return age1>7;
});
console.log(result);*/

///////////////////////////////////////////(18)USING Array.from() ////////
//var age=(12233445127);
var number=Array.from("12233445127");
console.log(number);

///////////////////////////////////////////(19)USING include()///////////////////////////
/*var fruits=["plum","passion fruits","lychee","nectarine","peach","pear","fig"];
console.log(fruits.includes("plum"));*/

////////////////////////////////////////////(20) USING JOIN ////////////////////////

/*var fruits =["plum","passion fruits","lychee","nectarine","peach","pear","fig"];
console.log(fruits.join());*/














