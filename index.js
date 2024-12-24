const number = document.getElementById("number");
const btnStart = document.getElementById("btnStart");
const btnStop = document.getElementById("btnStop");
const btnReset = document.getElementById("btnReset");
const lock = document.getElementById("lock");

let timer = new Date(0, 0, 0, 0, 0, 0, 0);
let theLoop;

function start(){
    btnStart.disabled = true;
    lock.style.transform = "translate(0, 0)";
    lock.style.opacity = "100%";
    theLoop = setInterval(() => {
        timer.setMilliseconds(timer.getMilliseconds() + 10);
        
        number.textContent = `${timer.getHours().toString().padStart(2, 0)}:${timer.getMinutes().toString().padStart(2, 0)}:${timer.getSeconds().toString().padStart(2, 0)}:${timer.getMilliseconds().toString().padStart(2, 0).slice(0, 2)}`;
    }, 10); 
}

function stop(){
    btnStart.disabled = false;
    lock.style.transform = "translate(0, -5px)";
    lock.style.opacity = "0%";
    clearInterval(theLoop);
}

function reset(){
    btnStart.disabled = false;
    lock.style.transform = "translate(0, -5px)";
    lock.style.opacity = "0%";
    clearInterval(theLoop);
    timer.setHours(0);
    timer.setMinutes(0);
    timer.setSeconds(0);
    timer.setMilliseconds(0);
    number.textContent = `${timer.getHours().toString().padStart(2, 0)}:${timer.getMinutes().toString().padStart(2, 0)}:${timer.getSeconds().toString().padStart(2, 0)}:${timer.getMilliseconds().toString().padStart(2, 0).slice(0, 2)}`;
}

btnStart.addEventListener("click", start);
btnStop.addEventListener("click", stop);
btnReset.addEventListener("click", reset);

// console.log(`${timer.getHours()}:${timer.getMinutes()}:${timer.getSeconds()}:${timer.getMilliseconds()}`);