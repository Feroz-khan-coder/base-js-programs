function searchEngine(array,id)
{
var emptyArray=[];
for(var i=0;i<array.length;i++)
  {
    var stub=array[i];
    if(stub.id==id)
    {
        emptyArray.push(stub);
    }
  }
  return emptyArray;
}
module.exports=searchEngine; 