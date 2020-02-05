var sortingOfPrice=function(arr)
{
    var emty=[];
for(var i=arr.length-1;i>0;i--)
{
       // var em=arr[i];
    if(arr[i]>arr[i-1])
    {
        var tem=arr[i];
        arr[i]=arr[i-1];
        arr[i-1]=tem;
        i=arr.length;
    }
       // emty.push(em);
}
    return arr;
}
var array=[9,12,2,1,3,6];
var result=sortingOfPrice(array);
console.log(result);
