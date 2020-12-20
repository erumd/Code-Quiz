// I used code grepper.com to help with the timer. I modified it to fit my criteria 
function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        // minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 10, 10);

        // minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds: seconds ;

        // display.textContent = minutes + ":" + seconds;
        display.textContent = seconds;


        if (--timer=== 0) {
            timer = duration;
            sendMessage();
        }
    }, 1000);
}

function sendMessage() {
    timerEl.textContent = " Timer Ended"
    
    }
// if(secondsLeft === 0) {
//     clearInterval(timerInterval);
//     sendMessage();
//   }

// }, 1000);
// }

// function sendMessage() {
// timeEl.textContent = " Timer Ended"

// }
window.onload = function () {
    var countdown = 60 * 5,
        display = document.querySelector('#time');
    startTimer(countdown, display);
};

// start button 
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('Start');

var questions = ["question1", "question2", "question3", "question4", "question5",]


