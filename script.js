// start button 
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('Start');

// W3 timer
// Set the date we're counting down to
// var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();
    
//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;
    
//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//   // Output the result in an element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
    
//   // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);

// activity 8 countdown


var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left for quiz";
    

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " Timer Ended"

}

setTime();


function myFunction() {
    document.getElementByClass("tn btn-outline-danger btn-lg").innerHTML = "";
    return;


// trired activity 9
// var timeLeft;
// function countdown() {
//     var timeLeft = 60;
//   // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//   var timeInterval = setInterval(function () {
//     // As long as the `timeLeft` is greater than 1
//     if (timeLeft > 1) {
//       // Set the `textContent` of `timerEl` to show the remaining seconds
//       timerEl.textContent = timeLeft + ' seconds remaining';
//       // Decrement `timeLeft` by 1
//       timeLeft--;
//     } else if (timeLeft === 1) {
//       // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
//       timerEl.textContent = timeLeft + ' second remaining';
//       timeLeft--;
//     } else {
//       // Once `timeLeft` gets to 0, set `timerEl` to an empty string
//       timerEl.textContent = '';
//       // Use `clearInterval()` to stop the timer
//       clearInterval(timeInterval);
//       // Call the `displayMessage()` function
//       displayMessage();
//     }
//   }, 1000);
// }




var questions = ["question1", "question2", ""]

// WHat do you use to style your html?
    // A.CSS
    // b. JavaScript
    // c. jQuery
    //D Github

    question1 =  {
        title: "what do you use to style your html",
        answers: ["CSS", "JavaScript", "Jquery", "GitHub"];
        correctAnswer: "css"
    }

    question2= {
        title: "Which is NOT a semantic element?"
        answers: ["Header", "Navigation", "Aside", "Div"];
        correctAnswer2: "Div" 
    }

    question3 = {
        title: "What are variables used to store?"
        answers: ["Numbers", "Letters", "Data Values", "Functions"];
        correctAnswer:"Data Values"
    }

    question4 = {
        title: "In conditional statements which words are NOT used?"
        answers: ["If", "Else", "Else If", "Than"]
        correctAnswer: "Than"
    }

    question5= {
        title: "A function is a block of code designed to perform a particular _____?"
        answers:["Data", "Task", "Loop","Condition"]
        correctAnswer: "Task"
    }