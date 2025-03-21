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

