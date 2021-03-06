//First Assignment
var stringInput = prompt("Enter string value");

function captalize(stringValue){
    var split = stringValue.split(" ");
    var value = "";
    for(var i=0; i<split.length; i++){
        var word = split[i];
        value+=word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        value+=" ";
    }
    return value;
}
console.log(captalize(stringInput));

//Second Assignment
var number = +prompt("Enter a number");

function factorial(number){
    var result = number;
    while(number > 1){
        result*=--number;
    }
    return result;
}
console.log(factorial(number));

//Third Assignment
//value 36
//course undefined
//z undefined exception