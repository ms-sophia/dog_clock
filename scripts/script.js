// let minutes = 60;
let timer;
let isPaused = false;
let minutes = 60;
function startTimer()
{
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    var timerElement = document.getElementById('timer');
    timerElement.textContent = minutes;
    if (minutes === 0)
    {
        clearInterval(timer);
        alert('Time is up! Take a break');
        timerElement.textContent = '60';
    }
    else if(!isPaused) {
        minutes--;
    }
}


function togglePauseResume()
{
    var pauseResumeBtn = document.querySelector('#pauseResumeBtn');
    isPaused = !isPaused;
    if (isPaused)
    {
        clearInterval(timer);
        pauseResumeBtn.textContent = 'Resume'; 
    }
    else
    {
        startTimer();
        pauseResumeBtn.textContent = 'Pause';
    }
}

// startTimer();
// ------------THIS IS FOR CLOCK---------------------//

// Showing the current time on the page
function showCurrentTime()
{
    // displaying the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();
    
    var hrs = currentTime.getHours();
    var mins = currentTime.getMinutes();
    var secs = currentTime.getSeconds();
    var meridian = "AM";
    
    if (hrs >= 12)
    {
        meridian = "PM";
    }
    var clockTime = hrs + ':' + mins + ':' + secs + " " + meridian + '!';

    clock.innerText = clockTime
    
    // Updates the seconds
    setInterval(showCurrentTime,1000)
}
// showCurrentTime();
