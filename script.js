var password = document.getElementById("passwordBox");
var minLength = 8;
var maxLenght = 128;
var specialCharacters = document.getElementById("specialCharacter");
var numberValue = document.getElementById("numberValue");
var lowerCase = document.getElementById("lowerCase");
var upperCase = document.getElementById("upperCase");

function createPassword() {
    let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "1234567890";
    let specialCharacters = "!@#$%^&*)(+=]{[}?/";



    lowerCase = document.getElementById("lowerCase");
    upperCase = document.getElementById("upperCase");
    specialChar = document.getElementById("specialChar");
    numberVal = document.getElementById("numberVal");
    passwordBox = document.getElementById("passwordbox")

    let passwordLength = prompt('Select the length of your password. Password needs to be at least 8 to 128 characters long')


    if (lowerCase == false && upperCase == false && specialChar == false && numberVal == false) {
        alert('You need to select at least one of the boxes below to receive your password.')
    }

    if ((passwordLength < minLength && passwordLength > maxLenght) {
            alert('choose a valid length')
        }

        if (passwordLength >= minLength && passwordLength <= maxLenght) {
            password = "";

            console.log(lowerCase, upperCase, specialChar, numberVal)

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
            // radomize password
            passwordBox.value = password;
        }
    }