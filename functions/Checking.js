var _ = require("underscore");
/*var result = _.sortBy([1, 2, 3, 4, 5, 6], function(num) { 
        return Math.sin(num); 
    });
console.log(result);*/

/*var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];*/

var marksSheet=[{firstName:"john",id:101,marks:80},{firstName:"thomas",id:102,marks:40}];
var result= _.sortBy(marksSheet, 'marks');
console.log(result.reverse());