var num=9088765;
var result=Math.floor(num%10);
console.log(result);
var first=num;
while(first>=10)
{
    first=Math.floor(first/10);
}
console.log(first);
result=first;
