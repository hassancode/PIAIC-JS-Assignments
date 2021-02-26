var number = +prompt("Enter a decimal number");
number = Math.ceil(parseFloat(number));
var text = "This is my dummy text";
var slicedText = text.slice(0,number);

var reverseStringArray = [];
for(var i=slicedText.length; i>=0; i--){
    reverseStringArray.push(slicedText[i]);
}
alert(reverseStringArray.join(""));

//Second assignment

var userInput = prompt("Enter text");
var splitUserInput = userInput.split(" ");
var result =""
for(var i=0; i<splitUserInput.length; i++){
    result+=splitUserInput[i].charAt(0).toUpperCase();
    result+=splitUserInput[i].substr(1).toLowerCase();
    result+=" ";
}
result.trim();
console.log(result);