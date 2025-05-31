let timerDisplay = document.querySelector('.timerdisplay'); 
let Startbtn = document.getElementById('Strtbtn'); 
let Stopbtn = document.getElementById('Stopbtn');
let Resetbtn = document.getElementById('Resetbtn');
let mesc = 0, secs = 0, mins = 0;
let timerId = null;
function startTimer() {
    mesc++;
    if (mesc === 100) {
        mesc = 0;
        secs++;
        if (secs === 60) {
            secs = 0;
            mins++;
        }
    }
    let minsString = mins < 10 ? `0${mins}` : mins;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let mescString = mesc < 10 ? `0${mesc}` : mesc;
    timerDisplay.innerHTML = `${minsString}:${secsString}:${mescString}`;
}
Startbtn.addEventListener('click', function () {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});
Stopbtn.addEventListener('click', function () {
    clearInterval(timerId);
    timerId = null;
});

Resetbtn.addEventListener('click', function () {
    clearInterval(timerId);
    timerId = null;
    mesc = secs = mins = 0;
    timerDisplay.innerHTML = `00:00:00`;
});