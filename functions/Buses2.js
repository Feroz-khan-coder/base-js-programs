var busesList=function(Bus1,source,destination,)// Find the Buses As per the source and destination
{
    var newBusList=[];
    for(var i=0;i<Bus1.length;i++)
    {
        var tem=Bus1[i];
        if(tem.source.localeCompare(source) ==0 && tem.destination.localeCompare(destination)==0)
        {
            newBusList.push(tem);
        }
    }
    return newBusList;
}
var priceOfBusList=function(arrayBus)
{
    for(var i=0;i<arrayBus.length;i++)
    {
      for(var j=1;j<arrayBus.length;j++)
              {
        var temp;
      if(arrayBus[i].price>arrayBus[j].price)     
                          {
        temp=arrayBus[i].price;
       console.log(temp);
        arrayBus[i].price=arrayBus[j].price;
        console.log(arrayBus[i]);
        arrayBus[j].price=temp;
        console.log(arrayBus[i+1]);
                          }
                }
    }
    return arrayBus;
}
var Buses=[{BusNumber:"12JI83T5",operator:"RedBus",source:"Hyderabad",destination:"Bangalore",price:470,startTime:"7AM",endTime:"8Pm"},
{BusNumber:"7U12UKJE",operator:"AbhiBus",source:"Bangalore",destination:"Hyderabad",price:540,startTime:"8AM",endTime:"8Pm"},
{BusNumber:"KL9OMJER",operator:"Travels",source:"Mumbai",destination:"Bangalore",price:1200,startTime:"9AM",endTime:"9PM"},
{BusNumber:"T45JIEK",operator:"MKT",source:"CHENNAI",destination:"Hyderabad",price:1450,startTime:"9AM",endTime:"9PM"},
{BusNumber:"12JI8343",operator:"RedBus",source:"Hyderabad",destination:"Bangalore",price:1000,startTime:"7AM",endTime:"8Pm"},
{BusNumber:"12JKU4ER",operator:"Yalls",source:"Hyderabad",destination:"Bangalore",price:2000,startTime:"9AM",endTime:"8Pm"},
{BusNumber:"12JKIU89",operator:"RedBull",source:"Hyderabad",destination:"Bangalore",price:1280,startTime:"10AM",endTime:"8Pm"}];

var newListOfBus=busesList(Buses,"Hyderabad","Bangalore");
//console.log(newListOfBus);
var resultOfPriceOfBusList=priceOfBusList(newListOfBus);
//console.log(resultOfPriceOfBusList);
/*var newListOfBus1=busesList(Buses,"8AM");*/

//var helloResult=newListOfBus.push("Hello");
//console.log(helloResult);
//console.log(Buses);
