/*var searchEngine=require('./FunctionInsideObject');
var object=[{FirstName:"Khan",SecondName:"Feroz",Subject:"JavaScript",id:1101},{FirstName:"john",SecondName:"Ayyar",Subject:"JavaScript",id:1102},
{FirstName:"kumar",SecondName:"abhi",Subject:"JavaScript",id:1103}];*/
/*var person = {firstName:"John",lastName :"Doe",id: 5566, fullName : function() 
    { return this.firstName + " " + this.lastName; } }*/
/*var searchResult=searchEngine(object,1103);
console.log(searchResult);*/

/*var firstAndLastName=require('./FirstLast');
var newName=  firstAndLastName("Feroz","khan");
console.log(newName);*/

var person=require('./Exports')
var person2=new person("khan","khan2");
console.log(person2.fullName());