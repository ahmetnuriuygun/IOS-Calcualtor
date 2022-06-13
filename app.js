const number0 = document.querySelector(".number-0")
const number1 = document.querySelector(".number-1")
const number2 = document.querySelector(".number-2")
const number3 = document.querySelector(".number-3")
const number4 = document.querySelector(".number-4")
const number5 = document.querySelector(".number-5")
const number6 = document.querySelector(".number-6")
const number7 = document.querySelector(".number-7")
const number8 = document.querySelector(".number-8")
const number9 = document.querySelector(".number-9")
const numberButtons = document.querySelectorAll(".num")
//* I assign to number buttons to the variables

const plus = document.querySelector(".addition")
const subtraction = document.querySelector(".subtraction")
const multiply = document.querySelector(".multiplication")
const division = document.querySelector(".division")
const percent = document.querySelector(".percent")
//* I assign to operation buttons to the variables


const equal = document.querySelectorAll(".equal")
//* I assign to equal buttons to display the result


const previous = document.querySelector(".previous-display")
const current = document.querySelector(".current-display")

//* I assign to display classes to the variables

let UstYazilacakSayiJS = "";
let AltYazilacakSayiJS = "";
numberButtons.forEach((number) => {
    number.addEventListener("click", () => {
        AltYazilacakSayiJS += number.textContent;
        //!ekrana bastır
        current.textContent = AltYazilacakSayiJS;})})




plus.onclick=()=>{
    previous.innerHTML=`${current.innerText} + `
    current.textContent = ""}   
subtraction.onclick=()=>{
    previous.innerHTML=`${current.innerText} - `
    current.textContent = ""}
multiply.onclick=()=>{
    previous.innerHTML=`${current.innerText} * `
    current.textContent = ""}
division.onclick=()=>{
    previous.innerHTML=`${current.innerText} / `
    current.textContent = ""}
percent.onclick=()=>{
    previous.innerHTML=`${current.innerText} % `
    current.textContent = ""}


