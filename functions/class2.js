class Car{
    constructor(brand,color,type){
        this.brand=brand;
        this.color=color;
        this.type=type;
    }
    static person(khan1){
        //var brand="suzuki";
        console.log(khan1.brand);
    }
}
mycar =new Car("Fort","red","customize");
Car.person(mycar);

