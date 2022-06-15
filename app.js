
const numberButtons = document.querySelectorAll(".num")
//* I assign to number button to the variables


const operationButtons = document.querySelectorAll(".operator")
//* I assign to operation button to the variables


const equal = document.querySelector(".equal")
//* I assign to equal button to display the result


const UstEkran = document.querySelector(".previous-display")
const AltEkran = document.querySelector(".current-display")

//* I assign to display classes to the variables

let AltYazilacakSayiJS = []
let UstYazilacakSayiJS = []
let islem = ""
let sonuc ;

numberButtons.forEach((number)=>{
    number.onclick=()=>{
        AltYazilacakSayiJS.push(number.textContent)
        AltEkran.textContent = AltYazilacakSayiJS.join("");
        console.log(AltYazilacakSayiJS);
    }
})
operationButtons.forEach((op)=>{
    op.onclick=()=>{
        UstYazilacakSayiJS = AltYazilacakSayiJS ;
        AltYazilacakSayiJS = [];
        islem = op.textContent
        UstEkran.textContent = UstYazilacakSayiJS.join("") + islem;
    }
})
equal.onclick=()=>{
    switch(islem){
        case "+" : 
        sonuc = Number(UstYazilacakSayiJS.join(""))+ Number(AltYazilacakSayiJS.join(""));
        AltEkran.textContent = sonuc
        console.log(sonuc)
        
    }
}

const pm = document.querySelector(".pm")


pm.onclick=()=>{
    let yeniSayi = Number(AltYazilacakSayiJS.join("")); 
    yeniSayi = -1 * yeniSayi;
    AltYazilacakSayiJS = []
    AltYazilacakSayiJS.push(yeniSayi)
    console.log(AltYazilacakSayiJS)
    AltEkran.textContent = AltYazilacakSayiJS
}

sifirlama = document.querySelector(".ac")
sifirlama.onclick=()=>{
    UstYazilacakSayiJS = []
    AltYazilacakSayiJS = []
    UstEkran.textContent = UstYazilacakSayiJS 
    AltEkran.textContent = AltYazilacakSayiJS 
}


















// numberButtons.forEach((number)=>{
//     number.addEventListener("click",e=>{
//     AltYazilacakSayiJS += number.textContent 
//     current.textContent = AltYazilacakSayiJS;
    
// operationButtons.forEach((op)=> {
// op.addEventListener("click",e=>{
//     islem = op.textContent;
//     UstYazilacakSayiJS = AltYazilacakSayiJS;
//     AltYazilacakSayiJS = ""
//         previous.innerHTML = UstYazilacakSayiJS + islem
    // });
    // });
    


// if(islem != null){
//     previous.textContent = `${UstYazilacakSayiJS} ${islem}`;
// }if(islem == "+"){
//     sonuc = UstYazilacakSayiJS + AltYazilacakSayiJS
//     current.textContent = sonuc
// }else if(islem == "-"){
//     sonuc = UstYazilacakSayiJS - AltYazilacakSayiJS
//     current.textContent = sonuc
// }else if(islem == "x"){
//     sonuc = UstYazilacakSayiJS * AltYazilacakSayiJS
//     current.textContent = sonuc
// }else if(islem == "÷"){
//     sonuc = UstYazilacakSayiJS / AltYazilacakSayiJS
//     current.textContent = sonuc
// }else if(islem == "%"){
//     sonuc = UstYazilacakSayiJS % AltYazilacakSayiJS
//     current.textContent = sonuc
// } 







// });
// });


















