/*function Student(Pid, Pname)
{
    this.id=Pid;
    this.name=Pname;
    this.getName = function()
    {
        return this.id + " "+ this.name+" "+ 'apple';
    }
}
var stu=new Student(120,"Feroz");
var stu2=new Student(123,"Khan");
var v1=stu.getName();
var v2=stu2.getName();
console.log(v2);
console.log(v1);
*/
/*function College(id,name, marks, year)
{
    this.id=id;
    this.name=name;
    this.marks=marks;
    this.year=year;
    this.getInfo=getStudentInfo;
}
function getStudentInfo()
{
    return this.id+ " & "+ this.year+" & "+ this.marks;
}
var result=new College(120,"Feroz", 570, "2018");
console.log(result.id);
var result1=result.getInfo();
console.log(result1);*/
/*
function Student(type)
{
    this.type=type;
    this.color="red";
}
Student.prototype.getInfo=function()
{
    return this.color+" "+ this.type+ " "+ "person";
}
var d=new Student("good");
var result1=d.getInfo();
console.log(result1);*/

/*var apple=
{
    type: "macintosh",
    color: "red",
    getInfo:function()
    {
        return this.type+" "+ this.color;
    }
}   
console.log(apple.color="reddish");
apple.getInfo();*/

var apple=new function()
{
    this.type="mcintosh";
    this.color="red";
    this.getInfo=function()
    {
        return this.color+" "+this.type;
    }
}
var r=apple.color;
console.log(r);
var r1=apple.getInfo();
console.log(r1);



