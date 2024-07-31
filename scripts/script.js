
// Showing the current time on the page
var showCurrentTime = function ()
{
    // displaying the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();
    
    var hrs = currentTime.getHours();
    var mins = currentTime.getMinutes();
    var secs = currentTime.getSeconds();
    var meridian = "AM";

    var clockTime = hrs + ':' + mins + ':' + secs + ':' + " " + meridian + '!';

    clock.innerText = clockTime
}

showCurrentTime();

