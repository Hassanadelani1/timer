const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const timer = document.getElementById("timer")
const resetBtn = document.getElementById("reset")
const startBtn = document.getElementById("start")

let count = 0;
let timeInterval = null;

function toggleButtons(state){
addBtn.disabled = state;
subtractBtn.disabled = state;
resetBtn.disabled = state;
}


addBtn.onclick = function(){
    count++
    timer.value = count
}
subtractBtn.onclick = function(){
    count--
    timer.value = count
}
resetBtn.onclick = function(){
    count = 0
    timer.value = count
}


startBtn.addEventListener("click", function(e){
e.preventDefault()
if(startBtn.textContent === "start"){
    toggleButtons(true)
    startBtn.textContent = "stop"
    timeInterval = setInterval(function(){
        if(count > 0){
            count--
            timer.value = count
        }else{
           clearInterval(timeInterval)
           timer.value = "Time's up!"
        }
        
    },1000)
   
}else{
    clearInterval(timeInterval)
    toggleButtons(false)
    startBtn.textContent = "start"
}
})

  

// console.log(startBtn.textContent)