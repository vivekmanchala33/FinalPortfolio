let video;
let classifier;
let modelUrl = 'https://teachablemachine.withgoogle.com/models/YqQmcXrCk/';
let userChoice = "";
let questionIndex = 0;
let score = 0;
let gameStarted = false;
let startButton;
let nextQuestionButton;

let questions = [
  { question: "The Earth is flat.", answer: "Thumbs Down" },
  { question: "Water boils at 100°C.", answer: "Thumbs Up" },
  { question: "The moon is a planet.", answer: "Thumbs Down" },
  { question: "Humans have 206 bones in their body.", answer: "Thumbs Up" },
  { question: "The sun is a star.", answer: "Thumbs Up" },
  { question: "The Great Wall of China is visible from space.", answer: "Thumbs Down" },
  { question: "Lightning never strikes the same place twice.", answer: "Thumbs Down" },
  { question: "Sharks are mammals.", answer: "Thumbs Down" },
  { question: "Albert Einstein was awarded the Nobel Prize in Physics.", answer: "Thumbs Up" },
  { question: "Pluto is still classified as a planet.", answer: "Thumbs Down" }
];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  
  startButton = createButton('Start Game');
  startButton.position(width / 2 - 50, height - 40);
  startButton.mousePressed(startGame);
  
  nextQuestionButton = createButton('Next Question');
  nextQuestionButton.position(width / 2 - 50, height - 80);
  nextQuestionButton.mousePressed(nextQuestion);
  nextQuestionButton.hide();
  
  classifier = ml5.imageClassifier(modelUrl + 'model.json', modelLoaded);
}

function startGame() {
  gameStarted = true;
  startButton.hide();
  nextQuestionButton.show();
}

function nextQuestion() {
  classifyGesture();
}

function modelLoaded() {
  console.log('Model Loaded!');
}

function classifyGesture() {
  if (gameStarted && questionIndex < questions.length) {
    classifier.classify(video, (results) => {
      if (results && results.length > 0) {
        userChoice = results[0].label;
        checkAnswer();
      }
    });
  }
}

function checkAnswer() {
  if (questionIndex < questions.length) {
    if (userChoice === questions[questionIndex].answer) {
      score++;
    }
    questionIndex++;
    if (questionIndex >= questions.length) {
      nextQuestionButton.hide();
    }
  }
}

function draw() {
  background(220);
  image(video, 0, 0, width, height);

  fill(0);
  textSize(24);
  textAlign(CENTER, CENTER);
  
  if (!gameStarted) {
    text("Press Start to Begin", width / 2, height / 2);
  } else if (questionIndex < questions.length) {
    text(questions[questionIndex].question, width / 2, 30);
    text("Press Next Question to Answer", width / 2, 60);
  } else {
    text("Game Over!", width / 2, 30);
    text("Final Score: " + score + "/10", width / 2, 60);
  }
}
