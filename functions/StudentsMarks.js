var marks=function(array)
{
    var tem=[];
    for(var i=0; i<array.length;i++)
    {
        var tem1=array[i];
        if(tem1.marks==80)
        {
            tem.push(tem1);
        }
    }
    return tem;
}
var marksSheet=[{firstName:"john",id:101,marks:80},{firstName:"thomas",id:102,marks:40}];
var newMarks=marks(marksSheet);
console.log(newMarks);