var filterStudentsByMarks=require('./array9')
var students=[{rollno:1,name:"ravi",marks:40},{rollno:2,name:"john",marks:70},{rollno:3,name:"thomos",marks:90}];
var finalFilteredStudentsMarks=filterStudentsByMarks(students,50);
console.log("finalFileterdStudentsMarks==>", finalFilteredStudentsMarks);
