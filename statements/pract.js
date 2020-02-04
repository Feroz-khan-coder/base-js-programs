var num = 1234, reversed = 0;
while(num != 0) 
{
    var digit = num % 10;
    console.log("digit ::", digit);
    reversed = (reversed * 10) + digit;
    console.log("reversed ::",reversed);
    num =  Math.floor(num / 10);
    console.log("num ::", num);
}
console.log(reversed);