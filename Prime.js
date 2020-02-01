var n=20;
var i;
for(i=3;i<n;i++)
{
        for(j=2;j<i;j++)
        {
            var count=0;
    if(i%j==0)
    {
        console.log(i+ " is not prime");
        count++;
        break;
    }
        }  
        if(count<=0)
        {
            console.log(i+" is Prime number");
        }
}
