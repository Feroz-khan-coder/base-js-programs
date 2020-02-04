function filterStudentsByMarks(array,marks)
{
    var filterArr=[];
    for(var i=0; i<array.length;i++)
    {
        var stu=array[i];
        if(stu.marks>marks)
        {
            filterArr.push(stu);
        }
    }
    return filterArr;
}
module.exports=filterStudentsByMarks; 