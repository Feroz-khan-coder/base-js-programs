var num=123432;
var rem, sum=0;
var palindrom=num;
while(num>0)
    {
        rem=Math.floor(num%10);
         sum=sum*10+rem;
        num=Math.floor(num/10);
    }
console.log(sum);
if(sum==palindrom)
{
    console.log("It is palindrom");
}
else
{
    console.log("It is not palindrom");
}
