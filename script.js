// What's left:
//need to count down and get question flip to next question on click of next buttoon
// total correct answers
// make prompts to notify if answer choices are right or time runs out

var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var countdownContainer = document.getElementById("countDownContainer");

//var answers = document.getElementById("answers");
//var answerButtonElement = document.getElementById("answer-buttons");
var intro = document.getElementById("intro");
//var timer = document.getElementById("progress");
var optionA = document.getElementById("a");
var optionB = document.getElementById("b");
var optionC = document.getElementById("c");
var optionD = document.getElementById("d");

// Question Variables and array

var myQuestions = [
  {
    question: "What player scored the most points in one game?",
    optionA: "Michael Jordan",
    optionB: "Kobe Bryant",
    optionC: "Wilt Chamberlain",
    optionD: "Allen Iverson",
    correct: "c",
    correctResponse:
      "Nice job!",
    incorrectResponse: "The correct answer is Wilt Chamberlain",
    timedOut: "awww, too slow"
  },
  {
    question: "What player has the most career assists?",
    optionA: "John Stockton",
    optionB: "Jason Kidd",
    optionC: "Steve Nash",
    optionD: "Scott Skiles",
    correct: "a",
    correctResponse: "Nice!",
    incorrectResponse:
      "Nope, the correct answer is John Stockton!",
    timedOut: "Times up!"
  },
  {
    question:
      "What team has the best record in one season?",
    optionA: "Los Angeles Lakers",
    optionB: "Golden State Warriors",
    optionC: "Chicago Bulls",
    optionD: "Boston Celtics",
    correct: "b",
    correctResponse:
      "Nice job!",
    incorrectResponse: "Nope!",
    timedOut: "Times up!"
  },
  {
    question:
      "Who was the #1 draft pick in 2003?",
    optionA: "LeBron James",
    optionB: "James Harden",
    optionC: "Carmelo Anthony",
    optionD: "Dwayne Wade",
    correct: "a",
    correctResponse:
      "Nice!",
    incorrectResponse: "Nope!",
    timedOut: "Times up!"
  },
  {
    question:
      "What team drafted Kobe Bryant?",
    optionA: "Sacramento Kings",
    optionB: "Seattle Sonics",
    optionC: "Charlotte Hornets",
    optionD: "Los Angeles Lakers",
    correct: "c",
    correctResponse: "Nice!",
    incorrectResponse: " Nope!",
    timedOut: "Times upt!"
  },
  {
    question: "What player has the highest career FT percentage?",
    optionA: "Shaq",
    optionB: "Steve Nash",
    optionC: "Ray Allen",
    optionD: "Michael Redd",
    correct: "b",
    correctResponse: "Correct!",
    incorrectResponse: "Not this time!",
    timedOut:
      "Times up!"
  },
  {
    question: "Who has the most career rebounds?",
    optionA: "Patrick Ewing",
    optionB: "Hakeem Olajawon",
    optionC: "Wilt Chamberlain",
    optionD: "Tim Duncan",
    correct: "c",
    correctResponse: "Correct!",
    incorrectResponse: "Not this time!",
    timedOut:
      "Times up!"
  },
  {
    question:
      "Who has the most career points in the playoffs?",
    optionA: "Lebron James",
    optionB: "Kobe Bryant",
    optionC: "Wilt Chamberlain",
    optionD: "Michael Jordan",
    correct: "d",
    correctResponse: "Correct!",
    incorrectResponse: "Not this time!",
    timedOut:
      "Times up!"
  },
  {
    question:
      'Who won the most NBA Finals MVPs?"',
    optionA: "Kobe Bryant ",
    optionB: "Michael Jordan",
    optionC: "Lebron James",
    optionD: "Kareem abdul Jabbar",
    correct: "b",
    correctResponse: "Correct!",
    incorrectResponse: "Not this time!",
    timedOut:
      "Times up!"
  },
  {
    question: "Who is the first player to be drafted #1 without playing college or high school basketball in the U.S.?	",
    optionA: "Zaza Pachulia",
    optionB: "Tony Parker",
    optionC: "Dirk Nowitzski",
    optionD: "Yao Ming",
    correct: "d",
    correctResponse: "Correct!",
    incorrectResponse: "Not this time!",
    timedOut:
      "Times up!"
  }
];

var previousQuestion = myQuestions.length - 1;
var currentQuestion = 0;
var Time = 10;

// Start quizz
startButton.addEventListener("click", startQuizz);

function startQuizz() {
  console.log("Started");
  startButton.classList.add("hide");
  intro.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  countdownContainer.classList.remove("hide");
  previousQuestion = myQuestions.length - 1;
  currentQuestion = 0;
  // start timer here
  var countdown = setInterval(function() {
    --Time;
    document.getElementById("countDown").innerHTML = Time;
    if (Time <= 0) {
      // stop count down and show prompt and them move to next question
      checkAnswer();
    }
  }, 1000);
}

setNextQuestion();

a.addEventListener("click", function() {
  checkAnswer("a");
});
b.addEventListener("click", function() {
  checkAnswer("b");
});
c.addEventListener("click", function() {
  checkAnswer("c");
});
d.addEventListener("click", function() {
  checkAnswer("d");
});

function checkAnswer(answer) {
  console.log("Answer: " + answer);
  if (answer == myQuestions[currentQuestion].correct) {
    alert(myQuestions[currentQuestion].correctResponse);
    //  add score++
  } else {
    alert(myQuestions[currentQuestion].incorrectResponse);
  }
  currentQuestion++;
  //Check if sending next question or final score hide last question after prompt
  //if currentQuestion == myQuestions.length
  Time = 10;
  setNextQuestion();
}

// get next question to populate on click
nextButton.addEventListener("click", setNextQuestion);

function setNextQuestion() {
  var q = myQuestions[currentQuestion];

  questionElement.innerText = q.question;
  optionA.innerHTML = q.optionA;
  optionB.innerHTML = q.optionB;
  optionC.innerHTML = q.optionC;
  optionD.innerHTML = q.optionD;
}


