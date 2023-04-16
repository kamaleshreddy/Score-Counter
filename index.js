let homescore = document.getElementById("homescore")

let guestscore = document.getElementById("guestscore")

function addhomeone() {
  homescore.textContent = Number(homescore.textContent) + 1
}

function addhometwo() {
  homescore.textContent = Number(homescore.textContent) + 2
}

function addhomethree() {
  homescore.textContent = Number(homescore.textContent) + 3
}

function addguestone() {
  guestscore.textContent = Number(guestscore.textContent) + 1
}

function addguesttwo() {
  guestscore.textContent = Number(guestscore.textContent) + 2
}

function addguestthree() {
  guestscore.textContent = Number(guestscore.textContent) + 3
}