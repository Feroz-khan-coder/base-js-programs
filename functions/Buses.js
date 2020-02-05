var busesList=function(Bus1,source,destination)
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
    /*for(var j=0;j<Bus1.length;i++)
    {
            var tem=Bus1[i];
            if(tem.startTime>)
            {
                    
            }
    }*/
    return newBusList;
}
var Buses=[{BusNumber:"12JI83T5",operator:"RedBus",source:"Hyderabad",destination:"Bangalore",price:470,startTime:"7AM",endTime:"8Pm"},
{BusNumber:"7U12UKJE",operator:"AbhiBus",source:"Bangalore",destination:"Hyderabad",price:540,startTime:"8AM",endTime:"8Pm"},
{BusNumber:"KL9OMJER",operator:"Travels",source:"Mumbai",destination:"Bangalore",price:1200,startTime:"9AM",endTime:"9PM"},
{BusNumber:"T45JIEK",operator:"MKT",source:"CHENNAI",destination:"Hyderabad",price:1450,startTime:"9AM",endTime:"9PM"}];

var newListOfBus=busesList(Buses,"Hyderabad","Bangalore");
console.log(newListOfBus);
var newListOfBus1=busesList(Buses,"8AM");