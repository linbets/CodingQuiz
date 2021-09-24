var timer;
var time = 90;

var questions = [
  {
    text: "What is your favorite color?",
    choice: ["red","green","blue","purple"],
    answer: "purple"
  },
  {
    text: "What is your favorite food?",
    choice: ["pizza","burger","pasta","tacos"],
    answer: "tacos"
  },
  {
    text: "What is your favorite activity?",
    choice: ["reading","biking","watching tv","painting"],
    answer: "reading"
  },
  {
    text: "What is your favorite subject?",
    choice: ["history","science","english","math"],
    answer: "math"
  }
];

document.querySelector(".start").addEventListener("click", function() {
  //hide the start stuff
  document.querySelector(".start-elements").classList.add("hide");
  //show question
  document.querySelector(".question-elements").classList.remove("hide");
  //start the timer
  timer = setInterval(function() {
    time--;
    document.querySelector(".time").textContent = time;
  },1000);
  //show the question
  showQuestion();
});
var score = 0;
var qIndex = 0;
var showQuestion = function() {
  var currentq = questions[qIndex];
  //create template
  var template = `
    <div>
      <div class="question-text">${currentq.text}</div>
      <div class="choice">
        <div class="answer-choice">${currentq.choice[0]}</div>
        <div class="answer-choice">${currentq.choice[1]}</div>
        <div class="answer-choice">${currentq.choice[2]}</div>
        <div class="answer-choice">${currentq.choice[3]}</div>
      </div>
    </div>
  `;
  //add the tempalte to the page
  document.querySelector(".question-elements").innerHTML = template;
  //eventlistener
  var allChoice = document.querySelectorAll(".answer-choice");
  allChoice.forEach(function(choice) {
    choice.addEventListener("click", function(e) {
      if (e.target.textContent === currentq.answer) {
        score++;
      } else {
        time -=5;
      }

      qIndex++;

      if(qIndex === questions.length){
        endQuiz();
      } else {
        showQuestion();
      }
    });
  });
};