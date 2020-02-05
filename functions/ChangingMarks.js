var marks=function(array)
{
    var tem=[];
    for(var i=0;i<array.length;i++)
    {
        var tem1=array[i];
        tem1.marks=tem1.marks+10;
        tem.push(tem1);
    }
    return tem;
}
var arr=[{firstName:"feroz",marks:20},{firstName:"khan",marks:49}];
var newMarks=marks(arr);
console.log(newMarks);