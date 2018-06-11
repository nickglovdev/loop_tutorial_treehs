
/*
function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

// While loop will run 10 times shooting out 10 random numbers
document.write('<h2>Randoms Numbers 10 times</h2>');
var counter = 0;
while(counter < 10  ){
    var ranNum = randomNumber(6);
    document.write(ranNum + '');
    counter +=1;
}

// Another While loop that is trying to guess a random number from the function get random number
document.write('<h2>Computer Find Random Number</h2>')
function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}
var upper = 10000;
var randomNumber = getRandomNumber(upper)
var guess;
var attempts = 0;

while (guess !== randomNumber) {
  guess = getRandomNumber(upper);
  attempts += 1;
}
document.write('<p>The random number was: ' + randomNumber + '</p>');
document.write('<p> It took the computer ' + attempts  + ' attempts to get it right</p>');
*/

// Do while loop for guessing numbers
var randomNumberTwo = getRandomNumberTwo(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumberTwo(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

do {
  guess = prompt ('I am thinking of a number number between 1 and 10. What is it?!');
  guessCount += 1;
  if(parseInt(guess) === randomNumberTwo) {
    correctGuess = true;
  }
} while (! correctGuess) {
  document.write ('<h2><strong>Do While</strong></h2>')
  document.write ('<h2> You guess the number!</h2>');
  document.write('It took you ' + guessCount + ' tries to guess the number .' + randomNumberTwo);
}
