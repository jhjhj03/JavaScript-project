const startbutton = document.getElementById("start-button");
const stopbutton = document.getElementById("stop-button");
const resetbutton = document.getElementById("reset-button");

let appendseconds = document.getElementById("seconds");
let appendtens = document.getElementById("tens");

let tens =0;
let seconds =0;
let Interval;


startbutton.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}

stopbutton.onclick = function () { clearInterval(Interval); }

resetbutton.onclick = function () { clearInterval(Interval);
    tens = 0;
    seconds=0;
    appendseconds.innerHTML = 0;
    appendtens.innerHTML = 0;

 }

function startTimer() {
    tens++
    if (tens <= 99) {
        appendtens.innerHTML = tens;
    }
    if (tens > 99) {
        tens = 0;
        seconds++;
        appendseconds.innerHTML = seconds;
        appendtens.innerHTML = tens;
    }
}

