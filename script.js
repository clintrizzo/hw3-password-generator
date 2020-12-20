var password = document.getElementById("passwordBox");
var minLength = 8;
var maxLenght = 128;
var specialCharacters = document.getElementById("specialCharacter")[0];
var numberValue = document.getElementById("numberValue")[0];
var lowerCase = document.getElementById("lowerCase")[0];
var upperCase = document.getElementById("upperCase")[0];

function createPassword() {
    let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "1234567890";
    let specialCharacters = "!@#$%^&*)(+=]{[}?/"

    lowerCase = document.getElementById("lowerCase")[0].checked;
    upperCase = document.getElementById("upperCase")[0].checked;
    specialChar = document.getElementById("specialCharacter")[0].checked;
    numberVal = document.getElementById("numberValue")[0].checked;

    let passwordLength = prompt('Select the length of your password.')

    if (lowerCase == false && upperCase == false && specialChar == false && numberVal == false) {
        alert('You need to select at least one of the boxes below to receive your password.')
    }
}