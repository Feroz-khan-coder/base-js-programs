var person={
    firstName:"Feroz1",lastName:"khan1",subject:"javascript",
    fullName:function(firstName,lastName)
    {
           return this.firstName+this.lastName;
    }
};
console.log(person.fullName("khan","feroz"));
console.log(person.firstName);
var r=this;
console.log(r);
