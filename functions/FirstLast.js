function firstAndLastName(firstName, lastName)
{
    this.firstName=firstName;
    this.lastName=lastName;
    return lastName + " " + firstName;
}
module.exports=firstAndLastName; 