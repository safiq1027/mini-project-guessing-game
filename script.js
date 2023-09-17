//initilizing some values
let totalAttempts=5;
let attempts = 0;
let totalWons = 0;
let totalLosts = 0;



// finding elements
const form=document.querySelector("form");
const cardBody=document.querySelector(".card-body");
const gussingNumber=form.querySelector("#gussingNumber");
const checkButton=form.querySelector("#check");
const resultText=cardBody.querySelector(".resultText");
const lostWonMessage = document.createElement("p")
const remainingAttempts=cardBody.querySelector(".remainingAttempts");


form.addEventListener("submit",function(event){
    event.preventDefault();
    
    attempts++;
    if(attempts===5){
        gussingNumber.disabled =true;
        checkButton.disabled = true;
    }
    if(attempts < 6)
    {
        let guessNumber=Number(gussingNumber.value);
        checkResult(guessNumber);
        remainingAttempts.innerHTML=` Remaining Attempts  : ${totalAttempts-attempts}`
    }
    gussingNumber.value=""

})

function checkResult(gussingNumber){

    const randomNumber= getRandomNumber(5);
    if(gussingNumber==randomNumber){
        resultText.innerHTML=`you have won`;
        totalWons++;
    }else{
        resultText.innerHTML=`you have lost;random number was : ${randomNumber}`
        totalLosts++;
    }
    lostWonMessage.innerHTML = `Won : ${totalWons}, Lost : ${totalLosts}`
    lostWonMessage.classList.add("large-text");
    cardBody.appendChild(lostWonMessage);
}


function getRandomNumber(limit){
    return Math.floor(Math.random()*limit)+1;
}