const showPassword = document.querySelector("#showPassword");
const lengthPas = document.querySelector("#p-length");
const upperCase = document.querySelector("#upper-case");
const lowerCase = document.querySelector("#lower-case");
const numbers = document.querySelector("#number");
const symbols = document.querySelector("#symbols");

const lowerSet = "abcdefghijklmnopqrstuvwxtz";
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersSet = "1234567890";
const symbolSet = "!@#$%^&*()<>?/|";




const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
};

const generatePassword = (password = "") => {
    if (upperCase.checked) {
        password += getRandomData(upperSet);
    }
    if (lowerCase.checked) {
        password += getRandomData(lowerSet);
    }
    if (numbers.checked) {
        password += getRandomData(numbersSet);
    }
    if (symbols.checked) {
        password += getRandomData(symbolSet);
    }

    if (password.length < lengthPas.value) {
        return generatePassword(password);
    }
   
    console.log(truncateString(password, lengthPas.value));
    showPassword.value=truncateString(password, lengthPas.value);
};


document.getElementById("btn").addEventListener("click", () => {
    generatePassword();
});


function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}
