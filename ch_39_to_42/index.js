var course1 = +prompt("Enter first course number");
var course2 = +prompt("Enter second course number");
var course3 = +prompt("Enter third course number");
var course4 = +prompt("Enter forth course number");
var course5 = +prompt("Enter fifth course number");

var totalMarks = 500;
var obtainedMarks = course1 + course2 + course3 + course4 + course5
var totalPercentage = obtainedMarks * 100 / totalMarks;

function getGrade(totalPercentage) {
    var grade = "None";
    switch (true) {
        case totalPercentage > 90 && totalPercentage < 100:
            grade = "Grade A+";
            break;
        case totalPercentage > 75 && totalPercentage < 89:
            grade = "Grade A";
            break;
        case totalPercentage > 60 && totalPercentage < 74:
            grade = "Grade B";
            break;
        case totalPercentage > 45 && totalPercentage < 60:
            grade = "Grade C";
            break;
        case totalPercentage > 30 && totalPercentage < 44:
            grade = "Grade D";
            break;
        default:
            grade = "Grade F";
    }
    return grade;
}

alert(getGrade(totalPercentage));