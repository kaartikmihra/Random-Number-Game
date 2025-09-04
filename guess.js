let timer = 0 ;


function startTimer(){
    const time = document.getElementById("time");
    const countDown=setInterval(()=>{
        if(timer<60){
            timer++;
            time.textContent=timer;
        }
    },1000)
    
}
startTimer();

// genrating random number and show to ui
let randomNumber = document.getElementById('randomNumber'); 
let number = Math.floor(Math.random() * 10) + 1;
console.log(number);
randomNumber.innerText = number;

//set score
let scoreS = 0;
function setscore(){
    console.log("button clicked")
    let userNumber =  Number(document.getElementById("text").value); 
    let score = document.getElementById("score");
    if(userNumber === number){
        scoreS += 10;
        score.innerText = scoreS;
    }
    //generate new random number after submit
    number = Math.floor(Math.random() * 10) + 1;
    randomNumber.innerText = number;
    console.log(number);
 }
//submit buton working
let submitbtn = document.getElementById("submit").addEventListener("click",setscore);
