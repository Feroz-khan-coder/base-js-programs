// Creating the object with the different values inside and printing those values
var student={id:"101",name:"ravi",std:"10th",college:"KVT",address:"Hyderabad",age:22};
console.log("Student id is " +student.id);
console.log("Student name is "+ student.name);
console.log("Student std  is "+student.std);
console.log("Student college is  "+ student.college);
console.log("Student address is "+ student.address);
console.log("Student age is "+ student.age);
console.log("Student age is "+ student["age"]);
console.log(student);
/////////////////////////////////////////////////////////////////////////////////
//Printing the array which is in object
var student={id:"101",name:"ravi",std:"10th",college:"KVT",address:"Hyderabad",age:22,mobile:[1111,2222]};
console.log("Student mobile no 1 is "+ student.mobile[0]);
console.log("Student mobile no 2 is "+ student.mobile[1]);
////////////////////////////////////////////////////////////////////////////////
var bus={color:"Red",seats:30,drivername:"ravi",passangers:["pas1","pas2","pas3","pas4","pas5","pas6"]};
console.log(bus.color); 
console.log(bus.seats);
console.log(bus.drivername);
var x;
for(x=0;x<bus.passangers.length-1;x++)
{
    console.log("Passangers number " + x + " is " + bus.passangers[x]);
}
///////////////////////////////////////////////////////////////////
var bus={color:"Red",seats:30,drivername:"ravi",
    passangersname:[
        {firstname:"Josh",lastname:"kumar"},
        {firstname:"john",lastname:"kumar"},
        {firstname:"ravi",lastname:"kumar"}
    ]
};

console.log(bus.color); 
console.log(bus.seats);
console.log(bus.drivername);
console.log(bus.passangersname[0].firstname);
console.log(bus.passangersname[1].lastname);