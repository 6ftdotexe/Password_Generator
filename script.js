// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // change text in generate box to the generated password
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // code goes here
  var pwlength = prompt("How long do you want your password? (8-128 characters)");
  
  if(pwlength< "8" || pwlength > "128"){
    pwlength = prompt("How long do you want your password? (8-128 characters)");
  }
  
  var values = "";

  var characters = 
  [{q: "Lowercase?", v: "abcdefghijklmopqrstuvwxyz", a: "t"},
  {q: "Uppercase?", v: "ABCDEFGHIJKLMOPQRSTUVWXYZ", a: "t"},
  {q: "Numeric?", v: "1234567890", a: "t"},
  {q: "Special Characters?", v: "!@#$%^&*()_+", a: "t"}];
  

  // set the possible characters to generate the password from
  for (var i = 0; i < characters.length; i++){
    var answer = confirm(characters[i].q)
    if(answer === true && characters[i].a === "t") {
      values = values + characters[i].v;
    }
  }

  console.log("values",values);

  var password = "";

  // loop to generate a random password based on the possible characters in the values variable
  for (var i = 0; i <= pwlength; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  document.createElement("lastgenerated").innerHTML += password + "<br />";

  console.log("password",password);
  return(password);

}
