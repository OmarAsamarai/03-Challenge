// Assignment Code
 
var generateBtn = document.querySelector("#generate");
var submit;
var number;
var symble;
var uppercase;
var lowercase;
var proceed;
var charLength;
var psLength;
var keyToAdd;
var symbol;
var charElemnt;

var psLength = document.getElementById("legth");
var numberConfirm = document.getElementById("number");
var upperConfirm = document.getElementById("uppercase");
var loweConfirm = document.getElementById("lowercase");
var symboConfirm = document.getElementById("symbols");

function generatePassword() {

  // Password length -------------------------------------

var charLength = prompt("How many characters will your password be? Enter a number between 8 and 128");
if (!charLength) {
  alert("Please write a value");
}
if (charLength < 8 || charLength >128) {
  var charLength = prompt("Please choose character amount between 8 and 128");
  }
  else {
  console.log(charLength)
  }
  


// Choose the numbers -----------------------------------
var numberConfirm = window.confirm("Do you want to use numbers in the password?");
if (numberConfirm) {
  function numberConfirm() {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  
  number = numberConfirm();  
  console.log(number);
  //proceed
} else {
  proceed;
}







// Choose the characters -----------------------------------
var symbolConfirm = window.confirm("Do you want to use the symbols (!@#$%^&*(){}[]=<>/,.) in the password?");
if (symbolConfirm) {
  function getRandomSymbol() {
    var symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];

    
  }
  symbol = getRandomSymbol();
console.log(symbol);
    
  //proceed
} else {
  proceed;
}



// Choose the uppercase -----------------------------------
var uppercaseConfirm = window.confirm("Do you want to use uppercase in the password?");
if (uppercaseConfirm) {
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  
  uppercase = getRandomUpper()
console.log(uppercase);

  //proceed
} else {
  proceed;
}



// Choose the lowercase ------------------------------------
var lowercaseConfirm = window.confirm("Do you want to use lowercase in the password?");
if (lowercaseConfirm) {
  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  lowercase = getRandomLower();

console.log(lowercase);

  //proceed
} else {
  proceed;
}
console.log(number, symbol, uppercase, lowercase)
if (symbolConfirm+numberConfirm+uppercaseConfirm+lowercaseConfirm === 0) {
  choices = alert("You must choose a criteria!");
  return
}
else {
  proceed;
}
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



