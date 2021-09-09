var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var image1 = "/images/dice" + randomNumber1 + ".png";

var source = "/images/dice";
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var png = ".png";
var image2 = source + randomNumber2 + png;

document.getElementsByClassName("img1")[0].setAttribute("src", image1);
document.getElementsByClassName("img2")[0].setAttribute("src", image2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerText = "Player 2 Wins!";
} else if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerText = "Draw !";
}
