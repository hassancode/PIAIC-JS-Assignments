var course1 = +prompt("Enter first course number");
var course2 = +prompt("Enter second course number");
var course3 = +prompt("Enter third course number");
var course4 = +prompt("Enter forth course number");
var course5 = +prompt("Enter fifth course number");

var totalMarks = 500;
var obtainedMarks = course1+course2+course3+course4+course5
var totalPercentage = obtainedMarks*100/totalMarks;
alert(`Total percentage is ${totalPercentage}%`);