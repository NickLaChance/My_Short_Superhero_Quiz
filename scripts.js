function questionAndAnswer(question, answer, answera, guess, questionNum) {
  document.write("<h3>" + question + "</h3>");
  document.write("<h6>Your answer was: " + guess + ".</h6>");
  if ( guess.toUpperCase() === answer.toUpperCase() || guess.toUpperCase() === answera.toUpperCase() ) {
      document.write("<h4>That's right!!</h4>")
      answeredCorrectly += 1
      document.write("<p>You have answered " + answeredCorrectly + " questions correctly!</p>")
  } else {
      document.write("<h5>Sorry that is not the right answer..</h5>")
      document.write("<p>The correct answer was: " + answer + " or " + answera + ".</p>")
      document.write("<p>You have answered " + answeredCorrectly + " questions correctly!</p>")
  }

}

function quizScore(answeredCorrect, numberOfQuestions) {
  var quizScore = answeredCorrect / numberOfQuestions;
  var quizPercent = quizScore * 100;
  document.write("<h1>You scored: " + quizPercent + "% on the quiz!</h1>")
  if ( quizScore >= .8 ) {
    document.write("<h2>Congratulations!! You have passed the quiz!!")
  } else {
    document.write("<h2>Sorry, you did not pass the quiz.")
    document.write("<h2>Refresh the page to try again!")
  }
}

var answeredCorrectly = 0;
var questionNumber = 1;

var question1 = "Question(" + questionNumber + "/5): " + "What Superhero comes up with the strategic plans for the Justice League?";
var answer1 = "Batman";
var answer1a = "The Dark Knight"
var guess1 = prompt(question1);

questionAndAnswer(question1, answer1, answer1a, guess1, questionNumber)
questionNumber += 1

var question2 = "Question(" + questionNumber + "/5): " + "What Superhero is able to run fast enough to turn on every radio station on Earth??";
var answer2 = "Flash";
var answer2a = "The Flash"
var guess2 = prompt(question2);

questionAndAnswer(question2, answer2, answer2a, guess2, questionNumber)
questionNumber += 1

var question3 = "Question(" + questionNumber + "/5): " + "What Superhero is an offspring of the Greek God Zesus??";
var answer3 = "Wonder Woman";
var answer3a = "WonderWoman"
var guess3 = prompt(question3);

questionAndAnswer(question3, answer3, answer3a, guess3, questionNumber)
questionNumber += 1

var question4 = "Question(" + questionNumber + "/5): " + "What Superhero is a kid with powers of the gods??";
var answer4 = "Shazam";
var answer4a = "Captian Marvel"
var guess4 = prompt(question4);

questionAndAnswer(question4, answer4, answer4a, guess4, questionNumber)
questionNumber += 1

var question5 = "Question(" + questionNumber + "/5): " + "What Superhero started it all and was the first to appear in a comic??";
var answer5 = "Superman";
var answer5a = "Man of Steel"
var guess5 = prompt(question5);

questionAndAnswer(question5, answer5, answer5a, guess5, questionNumber)

quizScore(answeredCorrectly, questionNumber)
