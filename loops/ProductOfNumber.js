var num=777;
var rem, sum=1;
while(num>0)
    {
        rem=Math.floor(num%10);
         sum=sum*rem
        num=Math.floor(num/10);
    }
console.log(sum);
