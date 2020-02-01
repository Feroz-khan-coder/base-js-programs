// Problem - Printing the arrays from left to right, right to left, from middel ,Even indexes,odd indexes.
// find the arr length.prim indexes.
var arr=[10,20,30,40,50,60,70,80,90,100];
console.log(arr);//From Left to right
var i;
for(i=arr.length-1;i>=0;i--)
{
    console.log(arr[i]);// From right to left
}
var d;
for(d=0;d<arr.length-1;d++)
{
    if(d%2==0)
    {
        console.log(arr[d]);//EVEN INDEXES
    }
}
for(d=0;d<arr.length-1;d++)
    {
    if(d%2!=0)
    {
        console.log(arr[d]);//ODD INDEXES
    }
}
var m;
for(m=(arr.length)/2;m<=arr.length-1;m++)
{
    console.log(arr[m]);//Printing from half of array
}
console.log(arr.length);
var t,p;
for(t=3;t<arr.length-1;t++)
{
   var count=0;
    for(p=2;p<t;p++)
    {
        if(t%p==0)
        {
            count++;
            break;
        }
    }
    if(count<=0)
    {
        console.log(arr[t]);
    }
}