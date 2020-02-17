class Car
{
    constructor(brand,name,size)
    {
        this.carname=brand;
        this.id=1212;
        this.font="static";
    }

}
mycar=new Car("Ford","FEROZ",87);
var result=mycar.carname;
var result1=mycar.id;
var result2=mycar.font;
console.log(result+" "+result1+" "+result2);