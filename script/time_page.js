const stopwatchStart = document.getElementById("stopwatch-start")
const stopwatchReset = document.getElementById("stopwatch-reset")
const stopwatchStop = document.getElementById("stopwatch-stop")
const display = document.getElementById("stopwatch-display")
let time = 0
let interval = 0

stopwatchStart.addEventListener('click', () => {
    if (!interval) {
        interval = setInterval(() => {
            time++
            const hours = String(Math.floor(time / 3600)).padStart(2, '0')
            const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0')
            const seconds = String(Math.floor(time % 60)).padStart(2, '0')
            display.innerHTML = `${hours}:${minutes}:${seconds}`

        }, 1000)
    }
})
stopwatchReset.addEventListener('click', () => {
    clearInterval(interval)
    interval = null
    time = 0
    display.innerHTML = '00:00:00'

})
stopwatchStop.addEventListener('click', () => {
    clearInterval(interval)
    interval = null
})
let countdown;
const inputHours = document.getElementById('input-hours');
const inputMinutes = document.getElementById('input-minutes');
const inputSeconds = document.getElementById('input-seconds');
const setTimerButton = document.getElementById('set-timer');
const timerDisplay = document.getElementById('timer-display');

setTimerButton.addEventListener('click', () => {
    const hours = parseInt(inputHours.value) || 0;
    const minutes = parseInt(inputMinutes.value) || 0;
    const seconds = parseInt(inputSeconds.value) || 0;

    const totalTime = (hours * 3600) + (minutes * 60) + seconds

    clearInterval(countdown);
    startTimer(totalTime);
});

function formatTime(totalSeconds) {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;


    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}
function startTimer(seconds) {
    countdown = setInterval(() => {
        if (seconds <= 0) {
            clearInterval(countdown);
            alert("Time's up!");
            return;
        }
        seconds--;
        timerDisplay.textContent = formatTime(seconds);
    }, 1000);
}

