var courses = [];

var course1 = prompt("Enter first course name");
var course2 = prompt("Enter second course name");
var course3 = prompt("Enter third course name");
var course4 = prompt("Enter forth course name");
var course5 = prompt("Enter fifth course name");

courses.push(course1);
courses.push(course2);
courses.push(course3);
courses.push(course4);
courses.push(course5);

alert(courses);

course1Edit = prompt("Enter first course name", course1);
course2Edit = prompt("Enter second course name", course2);
course3Edit = prompt("Enter third course name", course3);
course4Edit = prompt("Enter forth course name", course4);
course5Edit = prompt("Enter fifth course name", course5);

if(course1 !== course1Edit){
    courses.splice(0,1,course1Edit);
}
if(course2 !== course2Edit){
    courses.splice(1,1,course2Edit);
}
if(course3 !== course3Edit){
    courses.splice(2,1,course3Edit);
}
if(course4 !== course4Edit){
    courses.splice(3,1,course4Edit);
}
if(course5 !== course5Edit){
    courses.splice(4,1,course5Edit);
}
alert(courses);

