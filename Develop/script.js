// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbersEl = document.getElementById('numbers');
var uppercaseEl = document.getElementById('uppercase');
var lowercaseEl = document.getElementById('lowercase');
var symbolEl = document.getElementById('symbol');
var getRandomSymbol = document.getElementById('randomsymbol')
var getRandomLower = document.getElementById('randomlower')
var getRandomUpper = document.getElementById('randomupper')
var getRandomNumber = document.getElementById('randomnumber')

var randomFunc = {
  lower: getRandomLower,
  number: getRandomNumber,
	upper: getRandomUpper,
	symbol: getRandomSymbol,
}


// const resultEl = document.getElementById('result');
// const lengthEl = document.getElementById('length');
// const uppercaseEl = document.getElementById('uppercase');
// const lowercaseEl = document.getElementById('lowercase');
// const numbersEl = document.getElementById('numbers');
// const symbolsEl = document.getElementById('symbols');
// const generateEl = document.getElementById('generate');
// const clipboard = document.getElementById('clipboard');


function generatePassword() {

  // Password length -------------------------------------
var lengthEl = function() {
  var length = "";
  
  if (length < 8 || length >128) {
    length = prompt("Choose password length between 8 and 128 charactors");
  }
  
  return length;

};

console.log(length);
var lengthEl = {
  length: lengthEl(),
}



// Choose the numbers -----------------------------------
var numberConfirm = window.confirm("Do you want to use numbers in the password?");
if (numberConfirm) {
  function getRandomNumber() {
    return (Math.floor(Math.random() * 10) + 48);  
  }
  
    
  //proceed
} else {
  proceed;
}
window.alert(getRandomNumber());


// Choose the characters -----------------------------------
var symbolConfirm = window.confirm("Do you want to use the symbols (!@#$%^&*(){}[]=<>/,.) in the password?");
if (symbolConfirm) {
  function getRandomSymbol() {
    var symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];

    
  }
  
    
  //proceed
} else {
  proceed;
}
console.log(getRandomSymbol());


// Choose the uppercase -----------------------------------
var uppercaseConfirm = window.confirm("Do you want to use uppercase in the password?");
if (uppercaseConfirm) {
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  
  

  //proceed
} else {
  proceed;
}
console.log(getRandomUpper());

// Choose the lowercase ------------------------------------
var lowercaseConfirm = window.confirm("Do you want to use lowercase in the password?");
if (uppercaseConfirm) {
  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  

  //proceed
} else {
  proceed;
}

console.log(getRandomLower());


  return
}




// // function to choose lower case ----------------------------
// var uppercaseEl = confirm("Do you want to use upppercase in ?");
// if (proceed) {
//   //proceed
// } else {
//   //don't proceed
// }




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



