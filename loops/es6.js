let callback=[];
let b=[1,2,3,4,5,6,8,23];
for(let i=0;i<b.length;i++)
{
    callback[i]=function()
    {
        return i*2;
    }
}
callback[0]()==0