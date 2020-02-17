var arr=[23,23,34,432,2,2,2,2];
function sum(prev,next)
{
    return prev+next;
}
console.log(arr.reduce(sum));