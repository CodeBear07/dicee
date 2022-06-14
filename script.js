function diceRoll() {
  var randomNumber = Math.random();
  var randomNumber1 = Math.floor(randomNumber * 7)
  var randomNumberR2  = Math.random();
  var randomNumber2 = Math.floor(randomNumberR2 * 7)
  while (randomNumber1 < 1 || randomNumber2 < 1) {
    var randomNumber = Math.random();
    var randomNumber1 = Math.floor(randomNumber * 7)
    var randomNumberR2  = Math.random();
    var randomNumber2 = Math.floor(randomNumberR2 * 7)
}
  if (randomNumber1 === 1) {
    document.querySelector(".dice .img1").setAttribute("src", "images/dice1.png");
  } if (randomNumber1 === 2) {
    document.querySelector(".dice .img1").setAttribute("src", "images/dice2.png");
  } if (randomNumber1 === 3) {
    document.querySelector(".dice .img1").setAttribute("src", "images/dice3.png");
  } if (randomNumber1 === 4) {
    document.querySelector(".dice .img1").setAttribute("src", "images/dice4.png");
  } if (randomNumber1 === 5) {
    document.querySelector(".dice .img1").setAttribute("src", "images/dice5.png");
  } if (randomNumber1 === 6) {

    document.querySelector(".dice .img1").setAttribute("src", "images/dice6.png");
  } if (randomNumber2 === 1) {
    document.querySelector(".dice .img2").setAttribute("src", "images/dice1.png");
  } if (randomNumber2 === 2) {
    document.querySelector(".dice .img2").setAttribute("src", "images/dice2.png");
  } if (randomNumber2 === 3) {
    document.querySelector(".dice .img2").setAttribute("src", "images/dice3.png");
  } if (randomNumber2 === 4) {
    document.querySelector(".dice .img2").setAttribute("src", "images/dice4.png");
  } if (randomNumber2 === 5) {
    document.querySelector(".dice .img2").setAttribute("src", "images/dice5.png");
  } if (randomNumber2 === 6) {
    document.querySelector(".dice .img2").setAttribute("src", "images/dice6.png");
  } if (randomNumber1 < randomNumber2) {
    document.querySelector(".winner").innerHTML = "Player2 wins! 🚩";
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector(".winner").innerHTML = "🚩 Player1 wins!";
  } else if (randomNumber1 = randomNumber2) {
    document.querySelector(".winner").innerHTML = "Draw!";
  }

}
