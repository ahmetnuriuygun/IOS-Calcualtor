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

//* I assign to number buttons to the variables

const plus = document.querySelector(".addition")
const subtraction = document.querySelector(".subtraction")
const multiply = document.querySelector(".multiplication")
const division = document.querySelector(".division")
const percent = document.querySelector(".percent")
const equal = document.querySelectorAll(".equal")

//* I assign to operation buttons to the variables

const previous = document.querySelector(".previous-display")
const current = document.querySelector(".current-display")

//* I assign to display classes to the variables


number0.onclick=()=>current.textContent = 0;
number1.onclick=()=>current.textContent = 1;
number2.onclick=()=>{current.textContent = 2;
    const firstNumber= current.textContent;
    console.log(firstNumber); 
};
number3.onclick=()=>current.textContent = 3;
number4.onclick=()=>current.textContent = 4;
number5.onclick=()=>current.textContent = 5;
number6.onclick=()=>current.textContent = 6;
number7.onclick=()=>current.textContent = 7;
number8.onclick=()=>current.textContent = 8;
number9.onclick=()=>current.textContent = 9;


console.log(firstNumber);

let result = null;  

plus.onclick=()=>{
    previous.innerHTML=`${current.innerText} + `
    current.textContent = " "
    result =+ firstNumber}   
subtraction.onclick=()=>{
    previous.innerHTML=`${current.innerText} - `
    current.textContent = " "}
multiply.onclick=()=>{
    previous.innerHTML=`${current.innerText} * `
    current.textContent = " "}
division.onclick=()=>{
    previous.innerHTML=`${current.innerText} / `
    current.textContent = " "}
percent.onclick=()=>{
    previous.innerHTML=`${current.innerText} % `
    current.textContent = " "}

    console.log(result)


equal.onclick=()=>{
    current.textContent = `${result}
}