var num=4546;
var rem, sum=0;
while(num>0)
    {
        rem=Math.floor(num%10);
         sum=sum*10+rem;
        num=Math.floor(num/10);
    }
console.log(sum);
