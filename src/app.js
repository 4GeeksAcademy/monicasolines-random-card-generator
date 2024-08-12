/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let randomSuit = "";
  let randomCard = "";
  let card = document.querySelector(".card");
  let reloadButton = document.querySelector(".reloadButton");

  function randomCardGenerator() {
    //suit generator
    let randomNumSuit = Math.floor(Math.random() * 4) + 1;
    let randomNumCard = Math.floor(Math.random() * 13);

    if (randomNumSuit === 1) {
      randomSuit = "♦";
      document.querySelector(".randomSuitTop").classList.add("text-danger");
      document.querySelector(".randomSuitBottom").classList.add("text-danger");
    } else if (randomNumSuit === 2) {
      randomSuit = "♥";
      document.querySelector(".randomSuitTop").classList.add("text-danger");
      document.querySelector(".randomSuitBottom").classList.add("text-danger");
    } else if (randomNumSuit === 3) {
      randomSuit = "♠";
      document.querySelector(".randomSuitTop").classList.remove("text-danger");
      document
        .querySelector(".randomSuitBottom")
        .classList.remove("text-danger");
    } else if (randomNumSuit === 4) {
      randomSuit = "♣";
      document.querySelector(".randomSuitTop").classList.remove("text-danger");
      document
        .querySelector(".randomSuitBottom")
        .classList.remove("text-danger");
    }

    // card number generator
    if (randomNumCard === 0) {
      randomCard = "A";
    } else if (randomNumCard === 1) {
      randomCard = "2";
    } else if (randomNumCard === 2) {
      randomCard = "3";
    } else if (randomNumCard === 3) {
      randomCard = "4";
    } else if (randomNumCard === 4) {
      randomCard = "5";
    } else if (randomNumCard === 5) {
      randomCard = "6";
    } else if (randomNumCard === 6) {
      randomCard = "7";
    } else if (randomNumCard === 7) {
      randomCard = "8";
    } else if (randomNumCard === 8) {
      randomCard = "9";
    } else if (randomNumCard === 9) {
      randomCard = "10";
    } else if (randomNumCard === 10) {
      randomCard = "J";
    } else if (randomNumCard === 11) {
      randomCard = "Q";
    } else if (randomNumCard === 12) {
      randomCard = "K";
    }

    document.querySelector(".randomSuitTop").innerHTML = randomSuit;
    document.querySelector(".randomSuitBottom").innerHTML = randomSuit;
    document.querySelector(".randomCard").innerHTML = randomCard;
  }

  function updateCard() {
    card.textContent = randomCardGenerator();
  }

  reloadButton.addEventListener("click", randomCardGenerator);
  randomCardGenerator();

  setInterval(randomCardGenerator, 10000);
};
