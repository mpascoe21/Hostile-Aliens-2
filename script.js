// RENDER GAME HTML

// A FUNCTION / METHOD THAT SELECTS A TARGET SHIP AT RANDOM

// CLICK EVENT ON BUTTON

// A FUNCTION / METHOD THAT DEDUCTS POINTS FROM THE TARGET SHIP -> IF POINTS = 0 -> REMOVE SHIP

// NO SHIPS LEFT = GAME OVER

// MOTHER SHIP DESTROYED = ALL SHIPS DESTROYED -> GAME OVER

const button = document.querySelector(".button");
const allShipsContainer = document.querySelector("#allShipsContainer");
console.log(allShipsContainer);

class Ship {
  constructor(name, startPoints, hitPoints, id) {
    (this.name = name),
      (this.startPoints = startPoints),
      (this.hitPoints = hitPoints),
      (this.id = id);
  }

  remainingPoints() {
    return (this.startPoints = this.startPoints - this.hitPoints);
  }

  renderShip() {
    return `<div class="ship" id="${this.id}">
      <h3>${this.name}</h3>
      <p>${this.id}</p>
      <p class='startPoints'>${this.startPoints}</p>
    </div>`;
  }
}

let shipsArr = [];

const buildGame = () => {
  const motherShip = new Ship("Mother Ship", 100, 9, "S-" + 1);
  shipsArr.push(motherShip);
  allShipsContainer.innerHTML += motherShip.renderShip();
  console.log(motherShip);

  for (let i = 0; i < 5; i++) {
    const defenceShip = new Ship("Defence Ship", 80, 10, "S-" + (i + 2));
    shipsArr.push(defenceShip);
    allShipsContainer.innerHTML += defenceShip.renderShip();
    console.log(defenceShip);
  }

  for (let i = 0; i < 8; i++) {
    const attackShip = new Ship("Attack Ship", 45, 12, "S-" + (i + 7));
    shipsArr.push(attackShip);
    allShipsContainer.innerHTML += attackShip.renderShip();
    console.log(attackShip);
  }
  console.log(shipsArr);
};

const getRandomShip = () => {
  return Math.floor(Math.random() * shipsArr.length);
};

const hitRandomShip = () => {
  const randomShipIndex = getRandomShip();
  const currentShip = shipsArr[randomShipIndex];
  const HTMLShip = document.getElementById(currentShip.id);
  const hitShipRemainingPoints = currentShip.remainingPoints();
  HTMLShip.children[2].innerHTML = hitShipRemainingPoints;

  if (currentShip.id === "S-1" && hitShipRemainingPoints <= 0) {
    shipsArr = [];
  }

  if (hitShipRemainingPoints <= 0) {
    shipsArr.splice(randomShipIndex, 1);
    const HTMLShipToRemove = document.getElementById(currentShip.id);
    HTMLShipToRemove.remove();
  }
  gameOver();
};

const gameOver = () => {
  if (shipsArr.length === 0) {
    allShipsContainer.innerHTML = `<h1 class="gameOver">GAME OVER</h1>`;
    button.innerHTML = "Play again";
    button.removeAttribute("onclick");
    button.setAttribute("onclick", "startGame()");
  }
};

const startGame = () => {
  allShipsContainer.innerHTML = "";
  const launchMessage = document.querySelector(".launchMessage");
  launchMessage.innerHTML = "";
  buildGame();
  getRandomShip();
  button.innerHTML = "Shoot";
  button.removeAttribute("onclick");
  button.setAttribute("onclick", "hitRandomShip()");
};

button.onclick = () => {
  startGame();
};
