// function formalGreeting1() {
//     console.log("How are you?");
//   }
//   function casualGreeting1() {
//     console.log("What's up?");
//   }
//   function greet(type, greetFormal, greetCasual) {
//     if(type === 'formal') {
//       greetFormal();
//     } else if(type === 'casual') {
//       greetCasual();
//     }
//   }
//   // prints 'What's up?'
//   greet('formal', formalGreeting1, casualGreeting1);

function greet(a,b)
{
   return a*b;
}
function f1(func)
{
   var r1=func(102,20);
   return r1;
}
var result=f1(greet);
console.log(result);