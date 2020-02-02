// Program for find the students who got more than 50 
var student=[{id:101,name:"ravi",age:25,marks:45},
            {id:102,name:"john",age:24,marks:52},
            {id:103,name:"kumar",age:26,marks:51}];
var i;
            for(i=0;i<student.length;i++)
            {
                if(student[i].marks>50)
                {
                    console.log("The student who got marks more then 50 are " + student[i].name );
                } 
            }
            