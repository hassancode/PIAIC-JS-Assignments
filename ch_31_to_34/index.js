var fullName = prompt("Enter full name");
var dobDate = prompt("Enter date of birth date");
var dobMonth = prompt("Enter date of birth month");
var dobYear = prompt("Enter date of birth year");

console.log(`Hello ${fullName}, Good Morning`);

var dob = new Date(`${dobMonth} ${dobDate}, ${dobYear} 20:00:00`);
console.log(`Your DOB is ${dob}`);

var today = new Date();
var currentYear = today.getFullYear();
var currentMonth = today.getMonth();
var currentDate = today.getDate();
var currentHour = today.getHours();
var currentMinutes = today.getMinutes();
var currentSeconds = today.getSeconds();

var dobYear = dob.getFullYear();
var dobMonth = dob.getMonth();
var dobDate = dob.getDate();
var dobHour = dob.getHours();
var dobMinutes = dob.getMinutes();
var dobSeconds = dob.getSeconds();

var years = currentYear - dobYear;
var months = currentMonth - dobMonth;

const totalMonths = 11;

if (months < 0) {
    years -= 1;
    months = (totalMonths - dobMonth) + currentMonth + 1;
}

console.log(`You are ${years} years ${months} months ${currentDate} days ${currentHour} hours ${currentMinutes} minutes and ${currentSeconds} old`);

var isBirthday = false;
var monthsLeft = dobMonth - currentMonth;


var msDiff = undefined;
var daysTillBirthday = undefined;
var hoursTillBirthday = undefined;
var minutesTillBirthday = undefined;
var secondsTillBirthday = undefined;

//3 cases
// 1. 8-1=7+1
// 2. birthday
// 3. 0-1=-1+totalMonths=10+1  

if (monthsLeft > 0) {
    dob.setFullYear(today.getFullYear());
    msDiff = dob.getTime() - today.getTime();
    daysTillBirthday = Math.floor(msDiff / (1000 * 60 * 60 * 24));
    hoursTillBirthday = Math.floor(msDiff / (1000 * 60 * 60));
    minutesTillBirthday = Math.floor(msDiff / (1000 * 60));
    secondsTillBirthday = Math.floor(msDiff / (1000));
} else if (monthsLeft  < 0) {
    dob.setFullYear(today.getFullYear() + 1);
    msDiff = dob.getTime() - today.getTime();
    daysTillBirthday = Math.floor(msDiff / (1000 * 60 * 60 * 24));
    hoursTillBirthday = Math.floor(msDiff / (1000 * 60 * 60));
    minutesTillBirthday = Math.floor(msDiff / (1000 * 60));
    secondsTillBirthday = Math.floor(msDiff / (1000));
} else {
    isBirthday = true;
}

if (isBirthday) {
    var birthday = years + 1;
    console.log(`Happy Birthday ${fullName}, Today is your ${years}th Birthday`)

} else {
    console.log(`Time left in your next birthday: ${daysTillBirthday} days ${hoursTillBirthday} hours ${minutesTillBirthday} minutes ${secondsTillBirthday} seconds`)
}