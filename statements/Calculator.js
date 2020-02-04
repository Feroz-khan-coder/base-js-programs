var calculator=function(array,requiredRes)
{
    var result=[];
     if(requiredRes==mul)
    {
         var newArray=1;
            for(var i=0;i<array.length;i++)
            {
               
               newArray=newArray*array[i];       
            }
        result.push(newArray);
    }
   else if(requiredRes==add)
    {
         var newArray=0;
            for(var i=0;i<array.length;i++)
            {
               
               newArray=newArray+array[i];       
            }
        result.push(newArray);
    }   
   else if(requiredRes==sub)
    {
         var newArray=0;
            for(var i=0;i<array.length;i++)
            {
               newArray=array[i]-newArray;       
            }
        result.push(newArray);
    }      
    else(requiredRes==div)
    {
         var newArray=0;
            for(var i=0;i<array.length;i++)
            {
               
               newArray=newArray+array[i];       
            }
        result.push(newArray);
    }  
    return result; 
}
var sub,add,mul,div;
var arrAdd=[10,20,30,40];
var calculatedValues=calculator(arrAdd,sub);
console.log(calculatedValues);
