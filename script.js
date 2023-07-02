let playBtn = document.getElementById("playPause");
let resetBtn = document.getElementById("reset");
playBtn.style.opacity = 0.3;
resetBtn.style.opacity = 0.3;
playBtn.style.cursor = "not-allowed";
resetBtn.style.cursor = "not-allowed";


let hourUpBtn = document.getElementById("hUp");
let hourDownBtn = document.getElementById("hDown");

let minutesUpBtn = document.getElementById("mUp");
let minutesDownBtn = document.getElementById("mDown");

let secondsUpBtn = document.getElementById("sUp");
let secondsDownBtn = document.getElementById("sDown");

let hoursInput = document.getElementById("hours");
let minutesInput = document.getElementById("minutes");
let secondsInput = document.getElementById("seconds");

let secondsCounter = 0;
let minutesCounter = 0;
let hoursCounter = 0;
// ====== ==================
secondsUpBtn.addEventListener("click", function() { if(secondsCounter > 59) { secondsCounter = -1 } secondsCounter++; if(secondsCounter < 10) { secondsInput.value = `0${secondsCounter}`; } else { secondsInput.value = secondsCounter; } });
secondsDownBtn.addEventListener("click", function() { if(secondsCounter < 1) { secondsCounter = 61 } secondsCounter--; if(secondsCounter < 10) { secondsInput.value = `0${secondsCounter}`; } else { secondsInput.value = secondsCounter; } });

// =======================

minutesUpBtn.addEventListener("click", function() { if(minutesCounter > 59) { minutesCounter = -1 } minutesCounter++; if(minutesCounter < 10) { minutesInput.value = `0${minutesCounter}`; } else { minutesInput.value = minutesCounter; } });
minutesDownBtn.addEventListener("click", function() { if(minutesCounter < 1) { minutesCounter = 61 } minutesCounter--; if(minutesCounter < 10) { minutesInput.value = `0${minutesCounter}`; } else { minutesInput.value = minutesCounter; } });

// ==============================

hourUpBtn.addEventListener("click", function() { if(hoursCounter > 23) { hoursCounter = -1 } hoursCounter++; if(hoursCounter < 10) { hoursInput.value = `0${hoursCounter}`; } else { hoursInput.value = hoursCounter; } });

hourDownBtn.addEventListener("click", function() { if(hoursCounter < 1) { hoursCounter = 25 } hoursCounter--; if(hoursCounter < 10) { hoursInput.value = `0${hoursCounter}`; } else { hoursInput.value = hoursCounter; } });
// ===================

function showBtns() {
    if(+hoursInput.value === 0 &&(+minutesInput.value === 0 &&(+secondsInput.value === 0))) {
        playBtn.className = "fa-solid fa-circle-play fa-xl";
        playBtn.style.opacity = 0.3;
        resetBtn.style.opacity = 0.3;
        playBtn.style.cursor = "not-allowed";
        resetBtn.style.cursor = "not-allowed";

    }
    else {
        playBtn.style.opacity = 1;
        resetBtn.style.opacity = 1;
        playBtn.style.cursor = "pointer";
        resetBtn.style.cursor = "pointer";
    }
}

secondsDownBtn.addEventListener("click", showBtns);
secondsDownBtn.addEventListener("mousedown", function(e) { e.target.style.textShadow = "none"; });
secondsDownBtn.addEventListener("mouseup", function(e) { e.target.style.textShadow = "1px 1px 1px black"; });
secondsUpBtn.addEventListener("mousedown", function(e) { e.target.style.textShadow = "none"; });
secondsUpBtn.addEventListener("mouseup", function(e) { e.target.style.textShadow = "1px 1px 1px black"; });
secondsUpBtn.addEventListener("click", showBtns);
minutesDownBtn.addEventListener("click", showBtns);
minutesDownBtn.addEventListener("mousedown", function(e) { e.target.style.textShadow = "none"; });
minutesDownBtn.addEventListener("mouseup", function(e) { e.target.style.textShadow = "1px 1px 1px black"; });
minutesUpBtn.addEventListener("mousedown", function(e) { e.target.style.textShadow = "none"; });
minutesUpBtn.addEventListener("mouseup", function(e) { e.target.style.textShadow = "1px 1px 1px black"; });
minutesUpBtn.addEventListener("click", showBtns);
hourDownBtn.addEventListener("click", showBtns);
hourDownBtn.addEventListener("mousedown", function(e) { e.target.style.textShadow = "none"; });
hourDownBtn.addEventListener("mouseup", function(e) { e.target.style.textShadow = "1px 1px 1px black"; });
hourUpBtn.addEventListener("mousedown", function(e) { e.target.style.textShadow = "none"; });
hourUpBtn.addEventListener("mouseup", function(e) { e.target.style.textShadow = "1px 1px 1px black"; });
hourUpBtn.addEventListener("click", showBtns);

// ===================================

function visibilityOfBtns() {
    hourUpBtn.style.visibility = "visible";
    hourDownBtn.style.visibility = "visible";

    minutesUpBtn.style.visibility = "visible";
    minutesDownBtn.style.visibility = "visible";

    secondsUpBtn.style.visibility = "visible";
    secondsDownBtn.style.visibility = "visible";
}

function hiddenOfBtns() { 
    hourUpBtn.style.visibility = "hidden";
    hourDownBtn.style.visibility = "hidden";

    minutesUpBtn.style.visibility = "hidden";
    minutesDownBtn.style.visibility = "hidden";

    secondsUpBtn.style.visibility = "hidden";
    secondsDownBtn.style.visibility = "hidden";
}

let counterInterval = 2;

playBtn.onclick = function (e) {
    if(e.target.style.opacity != 0.3) {
        if(e.target.className == "fa-solid fa-circle-play fa-xl") {
            e.target.className = "fa-solid fa-circle-pause fa-xl";
            setInterval(increaseSeconds, 1000);
            document.querySelector("audio").play();
            hiddenOfBtns()
        }
        else {
            visibilityOfBtns()
            secondsDownBtn.style.visibility = "visible";
            e.target.className = "fa-solid fa-circle-play fa-xl";
            clearInterval(counterInterval);
            counterInterval++;
            document.querySelector("audio").pause();
            document.querySelector("audio").currentTime = 0;
        }
    }
}

// ==================================

function increaseSeconds() {
  
}


// =======================================
function resetInputs() {
    secondsCounter = 0;
    minutesCounter = 0;
    hoursCounter = 0;
    secondsInput.value = "00";
    minutesInput.value = "00";
    hoursInput.value = "00";
    playBtn.style.opacity = 0.3;
    resetBtn.style.opacity = 0.3;
    playBtn.style.cursor = "not-allowed";
    resetBtn.style.cursor = "not-allowed";
    playBtn.className = "fa-solid fa-circle-play fa-xl";
    clearInterval(counterInterval);
    visibilityOfBtns()
}

resetBtn.onclick = resetInputs;

// =======================================
