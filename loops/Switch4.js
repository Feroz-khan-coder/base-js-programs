var calculation;
calculation='%';
var num1, num2;
num1=10;
num2=30;
var result;
switch(calculation)
{
    case '+':
    result=num1+num2;
    break;
    case '-':
    result=num1-num2;
    break;
    case '*':
    result=num1*num2;
    break;
    case '/':
    result=num1/num2;
    break;
    case '%':
    result=num1%num2;
    break;
    default:
        console.log("Sorry no data available");
}
console.log(result);