//variables used for the code
var password = document.getElementById("passwordBox");
var minLength = 8;
var maxLenght = 128;
var specialCharacters = document.getElementById("specialCharacter");
var numberValue = document.getElementById("numberValue");
var lowerCase = document.getElementById("lowerCase");
var upperCase = document.getElementById("upperCase");

//functions to have the if statements met
function createPassword() {
    let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "1234567890";
    let specialCharacters = "!@#$%^&*)(+=]{[}?/";
    let passwordLength = prompt('Select the length of your password. Password needs to be at least 8 to 128 characters long')

    lowerCase = document.getElementById("lowerCase").checked; //for user to check the boxes they want for their password
    upperCase = document.getElementById("upperCase").checked;
    specialChar = document.getElementById("specialChar").checked;
    numberVal = document.getElementById("numberVal").checked;
    passwordBox = document.getElementById("passwordbox");

    //if user does not select a length between 8 and 128 an alert will appear for them to choose a new value
    if (passwordLength < 8) {
        alert('Please try again. Password must be between 8 and 128.');
        return;
    }

    if (passwordLength > 128) {
        alert('Please try again. Password must be between 8 and 128.');
        return;
    }

    //if condition to be met, alert to be called if condition is not met
    if (lowerCase == false && upperCase == false && numberVal == false && specialChar == false) {
        alert('Please try again. You need to check one of the boxes below to receive your password.')
    }

    //password will run if the length is met
    if (passwordLength >= minLength && passwordLength <= maxLenght) {
        password = "";

        //the if statements to pull from the functions
        for (i = 0; i < passwordLength; i++) {
            if (lowerCase && password.length < passwordLength) {
                password += lowerCaseLetters.charAt(Math.floor(Math.random() * lowerCaseLetters.length));
            }
            if (upperCase && password.length < passwordLength) {
                password += upperCaseLetters.charAt(Math.floor(Math.random() * upperCaseLetters.length));
            }
            if (specialChar && password.length < passwordLength) {
                password += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
            }
            if (numberVal && password.length < passwordLength) {
                password += numbers.charAt(Math.floor(Math.random() * numbers.length));
            }
        }

        //text to appear in the box of the password created
        passwordBox.value = password
    }
}