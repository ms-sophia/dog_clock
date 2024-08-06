// let minutes = 60;
let timer;
let isPaused = false;
let minutes = 60;
let seconds = 0;
let hours = 9;
let pauseResumeBtn = document.querySelector('#pauseResumeBtn');

function restartTimer()
{
    clearInterval(timer);
    isPaused = false;
    var timerElement = document.getElementById('timer');
    pauseResumeBtn.textContent = 'Pause';
    minutes = 60;
    seconds = 0;
    timerElement.textContent = formatTime(minutes, seconds);
}

function startTimer()
{
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    var timerElement = document.getElementById('timer');
    timerElement.textContent = formatTime(minutes, seconds);
    
    // changing gif function

    if (hours === 0 && minutes === 0 && seconds === 0)
    {
        clearInterval(timer);
        // // alert('Time is up! Take a break');
        // timerElement.textContent = formatTime(minutes,seconds);
    }
    else if(!isPaused) {
        if (seconds > 0)
        {
            seconds--;
        }
        else {
            seconds = 59;
            minutes--;
            
        }
    }
}

function formatTime(hours,minutes, seconds)
{
    return (`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`); 

}

function togglePauseResume()
{
    // var pauseResumeBtn = document.querySelector('#pauseResumeBtn');
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


gifChanger(minutes);

showCurrentTime();

// ------------THIS IS FOR CLOCK---------------------//

function gifChanger(minutes)
{
    var messageText = "This is where time events are reported";
    var image = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHJybzJqdzY1dG82YjJ1NHV4bWsxdWphem5tdmoybDJ6Z2Nhamt0cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gKHGnB1ml0moQdjhEJ/giphy.gif"

    var timeEventJS = document.getElementById('timeEvent');
    var dog_img = document.getElementById('dog_img');

    if (minutes === 0)
    {
        image = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZm1teDUyYWxkcjVsZTdpaG1semZ1Z3JvdHplaW4zY2Jnamh2aTRieSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/r3bL7nHJPAznO/giphy.gif"
        messageText = "You are Free Mode!!!"
    }
    else if (minutes < 15)
    {
        image = image = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZml1dnp6Mm5ldzFxcXUyaDZhbXZ4b2EycWI5Nm96d2FjZTVsaTNraCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Pv3GlvjHv1T1u/giphy.gif"
        messageText =  "Work Mode Bruh"
    }
    else if (minutes < 30)
    {
        image = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW51ODNkdHFnOXlyc2k3NmUydGNxOTA4ajFuNnM4NmxjaDk4MGliMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bswGDO7Rh1ONO/giphy.gif"
        messageText = "Break Mode!!!!!"
    }
    else if (minutes < 60)
    {
        image = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWY1czFoMnl0N2xjNHZobHlxMm02amVnZ3R1eTlweXMxOHlrajI3ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XdPCms1PVHESm8XR9c/giphy.gif"
        messageText = "Wurk Mode"
    }
    else
    {
        image = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHJybzJqdzY1dG82YjJ1NHV4bWsxdWphem5tdmoybDJ6Z2Nhamt0cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gKHGnB1ml0moQdjhEJ/giphy.gif"
        messageText = "No Mode"
    }


    timeEventJS.innerText = messageText;
    dog_img.src = image;

}

// Showing the current time on the page
function showCurrentTime()
{
    // displaying the string on the webpage
    var clock = document.getElementById('clock');

    // // Updates the seconds
    setTimeout(showCurrentTime, 1000)
    
    const currentTime = new Date().toLocaleTimeString();
    clock.innerText = currentTime;

}
