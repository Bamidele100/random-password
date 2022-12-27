//  Variable declarations for upper case, lower case, special character and numbers
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789"
let specialCharacter = "!@#$%^&*()_[]+=-{}~`<>,./]";
let passwordLength = 7;
let password = "";

function genPassword() {
   // To prompt character length between 8 and 128 
   passwordLength = prompt("How many characters length of password(8 - 128 characters");
   
   if ( passwordLength < 8 || passwordLength > 128){  
       alert("password length has to be number, 8 - 128 digits. Please try again.");
       return false;
      }
      //  To prompt upper case, lower case, special character and numbers
      let isupperCase = confirm("Do you want upper case");
      let islowerCase = confirm("Do you want lower case");
      let isspecialCharacter = confirm("Do you want special character");
      let isnumber = confirm("Do you want numbers");

      //   if condition for upper case
      if (isupperCase ){
         passwordLength
      for (let i = 1; i <= passwordLength; i++) {
         let randomNumber = Math.floor(Math.random() * upperCase.length);
         password += upperCase.substring(randomNumber, randomNumber +1);;
      } 
       }
      //   if condition for lower case
      if (islowerCase ){
         passwordLength
      for (let i = 1; i <= passwordLength; i++) {
         let randomNumber = Math.floor(Math.random() * lowerCase.length);
         password += lowerCase.substring(randomNumber, randomNumber +1);
      } 
      }
      //   if condition for special character
      if (isspecialCharacter ){
         passwordLength
         for (let i = 1; i <= passwordLength; i++) {
         let randomNumber = Math.floor(Math.random() * specialCharacter.length);
         password += specialCharacter.substring(randomNumber, randomNumber +1);
      } 
      }
      //   if condition fonumbers
      if (isnumber ){
         passwordLength
         for (let i = 1; i <= passwordLength; i++) {
         let randomNumber = Math.floor(Math.random() * number.length);
         password += number.substring(randomNumber, randomNumber +1);
      } 
      }

   document.getElementById("password").value = password; 
   return true;
}
