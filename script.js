// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare character arrays for future use
const passElements = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  special: "!#$%&()*+,-./:;<=>?@[\]^_{|}~"
}

// Primary function for password generator page, starting with prompts for user input
function writePassword() {
  
  // Declare variables. In certain patterns of bad user choice, the browser gets stuck in a loop of alerts and prompts. Hoping this will clear things up.
  var passLength = "";
  var passLowercase = "";
  var passUppercase = "";
  var passNumbers = "";
  var passSpecial = "";

  passLength = prompt(
    "How many characters would you like your password to contain?");
      passLength = Number(passLength);
      // Corrective alerts for bad user choices
      if (isNaN(passLength)){
        alert(
          "Please choose a numerical value.");
        writePassword();
      }
      if ( (passLength < 8) || (passLength > 128) ){
        alert(
          "Please choose a value between 8 and 128.");
        writePassword();
      }
  passLowercase = prompt(
    "Password containing lowercase letters? Enter y/n");
      // Corrective alert for unparseable answers
      if ((passLowercase != "y" ) && (passLowercase != "n")){
        alert(
          "Please enter y for yes or n for no.");
        writePassword();
      }
  passUppercase = prompt(
    "Password containing UPPERCASE letters? Enter y/n");
      // Corrective alert for unparseable answers
      if ((passUppercase != "y" ) && (passUppercase != "n")){
        alert(
          "Please enter y for yes or n for no.");
        writePassword();
      }
  passNumbers = prompt(
    "Password containing numbers? Enter y/n");
      // Corrective alert for unparseable answers
      if ((passNumbers != "y" ) && (passNumbers != "n")){
        alert(
          "Please enter y for yes or n for no.");
        writePassword();
      }
  passSpecial = prompt(
    "Password containing special characters? Enter y/n");
      // Corrective alert for unparseable answers
      if ((passSpecial != "y" ) && (passSpecial != "n")){
        alert(
          "Please enter y for yes or n for no.");
        writePassword();
      }

      // Corrective alert for no character types selected
      if ( (passLowercase == "n") &&
            (passUppercase == "n") &&
            (passNumbers == "n") &&
            (passSpecial == "n") ){
          alert(
            "Please choose some character types for your password!");
          writePassword();
          }
  
  // Create array from user responses
  let responseArray = [
    passLowercase, passUppercase, passNumbers, passSpecial
    ];

console.log(responseArray);

  // With all user inputs collected in array, run function to generate password
  generatePassword();
  function generatePassword() {
    // Four functions that pick random items from each character array
    function randomLower(){
      return passElements.lowerCase[Math.floor(Math.random() * passElements.lowerCase.length)];
    };
    function randomUpper(){
      return passElements.upperCase[Math.floor(Math.random() * passElements.upperCase.length)];
    };
    function randomNumber(){
      return passElements.numbers[Math.floor(Math.random() * passElements.numbers.length)];
    };
    function randomSpecial(){
      return passElements.special[Math.floor(Math.random() * passElements.special.length)];
    };

    // Functions placed in array
    var functionArray = [randomLower, randomUpper, randomNumber, randomSpecial];

    // Create an array of active functions by checking user response array
    let activeArray = [];
      for( var i = 0; i < functionArray.length; i++){
          if (responseArray[i] === "y") {
            activeArray.push(functionArray[i]);
          }
      }

console.log(activeArray);
    
    // Starting with an empty string, add random characters until desired password length is acheived
    var thepassword = "";
    while ( thepassword.length < passLength ) {
      let funChooser = Math.floor(Math.random() * activeArray.length);
      let keyToAdd = activeArray[funChooser]();
      thepassword += keyToAdd;
    }
    
console.log(thepassword);

    // Pass generated password back to HTML for display
    var passwordText = document.querySelector("#password");
    passwordText.value = thepassword;
  }

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

