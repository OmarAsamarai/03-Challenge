// Definitions ---
 
var generateBtn = document.querySelector("#generate");
var numberConfirm = document.getElementById("number");
var upperConfirm = document.getElementById("uppercase");
var loweConfirm = document.getElementById("lowercase");
var symboConfirm = document.getElementById("symbols");

var underArray = [];
var pwArray = [];  

//function generate password
function generatePassword() {

  // Choose the Password length -------------------------------------
var charLength = prompt("How many characters will your password be? Enter a number between 8 and 128");
if (!charLength) {
  alert("Please write a value");
  var charLength = prompt("Please choose character amount between 8 and 128");
}
if (charLength < 8 || charLength >128) {
  var charLength = prompt("Please choose character amount between 8 and 128");
}
if (charLength < 8 || charLength >128) {
  return;
  }

// Choose the numbers -----------------------------------
var numberConfirm = confirm("Do you want to use numbers in the password?");
if (numberConfirm) {
  function numberConfirm() {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  number = numberConfirm();  
  console.log(number);
  //proceed
}

// Choose the characters -----------------------------------
var symbolConfirm = window.confirm("Do you want to inclue the symbols (!@#$%^&*(){}[]=<>/) in the password?");
if (symbolConfirm) {
  function getRandomSymbol() {
    var symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];  
  }
  symbol = getRandomSymbol();
console.log(symbol);
    
  //proceed
} 

// Choose the uppercase -----------------------------------
var uppercaseConfirm = window.confirm("Do you want to inclue uppercase in the password?");
if (uppercaseConfirm) {
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  uppercase = getRandomUpper()
}

// Choose the lowercase ------------------------------------
var lowercaseConfirm = window.confirm("Do you want to inclue lowercase in the password?");
if (lowercaseConfirm) {
  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  lowercase = getRandomLower();

}
// If nothig chosen, no password will be generated.
if (symbolConfirm+numberConfirm+uppercaseConfirm+lowercaseConfirm === 0) {
  choices = alert("You must choose a criteria!");      
    }

// Collcting The characters together ------------
if (numberConfirm){
  underArray =underArray.concat(number)
}
if (symbolConfirm){
  underArray =underArray.concat(symbol)
}
if (uppercaseConfirm){
  underArray =underArray.concat(uppercase)
}
if (lowercaseConfirm){
  underArray =underArray.concat(lowercase)
}

for (var i = 0; i < charLength; i++) {
      
  pwArray.push (underArray[Math.floor(Math.random() * underArray.length)]); 
  }
  return pwArray.join("") ;
  
return
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



