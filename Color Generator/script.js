const colorCode=document.querySelector("#color-code");
const btn=document.querySelector("#btn");

const getColor= ( () => {
const randomNumber=Math.floor( Math.random() * 16777215);
const randomCode= "#" + randomNumber.toString(16);
console.log(randomNumber,randomCode)
document.body.style.backgroundColor=randomCode;
colorCode.innerHTML=randomCode;
navigator.clipboard.writeText(randomCode);
});

btn.addEventListener("click",getColor);



getColor();