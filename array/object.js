var person={name:"khan",first:"feroz",age:"27"};
delete person.age;
let text="";
for(var a in person)
{
    console.log(text=text+person[a]);
}
