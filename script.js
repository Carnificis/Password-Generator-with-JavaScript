// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword (){
  var passwordlength = parseInt(prompt("How many characters would you like your password to contain?")); //Requests a value for password length
  if (passwordlength < 8 ||passwordlength > 128 || isNaN (passwordlength)){
return'Password length must be at least 8 characters and no more than 128 characters';
} 
var hasNumeric = confirm("Click ok to confirm including numeric characters")//requests user input for different characters in password
var hasLower = confirm("Click ok to confirm including lower case characters")
var hasUpper = confirm("Click ok to confirm including upper case characters")
var hasSpecial = confirm("Click ok to confirm including special characters")
  
var validPasswordCharacters = [] // initialize to empty array

  if(hasNumeric){
    validPasswordCharacters += "0123456789"//list of available characters/
  }
if(hasLower){
  validPasswordCharacters += "abcdefghijklmnopqrstuvwxyz"//list of available characters/
}
if(hasUpper){
validPasswordCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"//list of available characters/
}
if(hasSpecial){
  validPasswordCharacters += "~`!@#$%^&*()_+[]{}|\':;?/.,<>"//list of available characters/
}
if (validPasswordCharacters.length === 0) {
  return"Please choose at least one option"
}
  
  var password = ""

  for (let i = 0; i < passwordlength; i++) {
   const element = Math.floor(Math.random() * validPasswordCharacters.length) // 0 to 1 
   password += validPasswordCharacters[element]
       }
  
  
  return password;
}
// Write password to the #password input
function writePassword() {
  //alert("working");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//user clicks a button
  //event listener, calling a function to write password
  //inside our function we prompt for password length
  //var passwordlength = prompt("How many characyers would you like your password to contain?"); //what does prompt return?
  //we need to validate the prompt so that it meets criteria, must be a number greater than 8, less than 129

//then user is prompted password length



//thenuser confirms for password criteria


//if(hasNumeric === false && hasLower === false && hasUpper === false && hasSpecial === false){
  //alert('Must select at least one character type');
//}

//object to store user input
//var userPassword = {
  //length: passwordLength,
  //hasNumeric: hasNumeric,
  //hasLower: hasLower,
  //hasUpper: hasUpper,
  //hasSpecial: hasSpecial,
//}
//return userPassword;

//create another function to generate user password
//var userOptions = getOptions();
//we have an array to store each criteria
//var possibleChars = []
//var result = []
//var numericCharacters = ['0','1','2','3','4','5','6','7','8','9'];
//if(userOptions.hasNumeric === true){
//possibleChars = possibleChars.concat
//}

//if(userPassword.hasNumeric===true)