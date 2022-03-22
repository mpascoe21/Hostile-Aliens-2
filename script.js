// RENDER GAME HTML

// A FUNCTION / METHOD THAT SELECTS A TARGET SHIP AT RANDOM

// CLICK EVENT ON BUTTON

// A FUNCTION / METHOD THAT DEDUCTS POINTS FROM THE TARGET SHIP -> IF POINTS = 0 -> REMOVE SHIP

// NO SHIPS LEFT = GAME OVER

// MOTHER SHIP DESTROYED = ALL SHIPS DESTROYED -> GAME OVER

//console.dir(document);
//console.log("working");
const button = document.querySelector(".button");
//button.addEventListener('click', ())
const allShipsContainer = document.querySelector("#allShipsContainer");
console.log(allShipsContainer);

//allShipsContainer.innerHTML === "";

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
    return `<div class='ship' id=${this.id}>
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
//getRandomShip();

const hitRandomShip = () => {
  //button.innerText = "Shoot";
  //button.addEventListener("click", () => {
  console.log(shipsArr);
  const randomShipIndex = getRandomShip();
  console.log(randomShipIndex + "  randomShipIndex");
  const currentShip = shipsArr[randomShipIndex];
  console.log(currentShip);
  console.log(currentShip.id + "  currentShip.id");
  const HTMLShip = document.getElementById(currentShip.id);
  console.log(HTMLShip);

  const hitShipRemainingPoints = currentShip.remainingPoints();
  console.log(hitShipRemainingPoints + "  hit ship remaining points");

  HTMLShip.children[2].innerHTML = hitShipRemainingPoints;

  if (hitShipRemainingPoints <= 40) {
    shipsArr.splice(randomShipIndex, 1);
    console.log(shipsArr);

    const HTMLShipToRemove = document.getElementById(currentShip.id);
    console.log(HTMLShipToRemove);
    HTMLShipToRemove.remove();
  }

  console.log(allShipsContainer);

  gameOver();
  // if (shipsArr.length === 0) {
  //   allShipsContainer.innerHTML = `<h1 class="gameOver">GAME OVER</h1>`;
  //   //allShipsContainer.innerHTML = "game over";
  //   button.innerHTML = "Play again";
  //   button.removeAttribute("onclick");
  //   button.setAttribute("onclick", "startGame()");
  // }
  //});
};

const gameOver = () => {
  if (shipsArr.length === 0) {
    allShipsContainer.innerHTML = `<h1 class="gameOver">GAME OVER</h1>`;
    //allShipsContainer.innerHTML = "game over";
    button.innerHTML = "Play again";
    button.removeAttribute("onclick");
    button.setAttribute("onclick", "startGame()");
  }
};

const startGame = () => {
  allShipsContainer.innerHTML = "";
  //button.addEventListener("click", (event) => {
  const launchMessage = document.querySelector(".launchMessage");
  launchMessage.innerHTML = "";

  buildGame();
  // buildGameArr();
  getRandomShip();
  button.innerHTML = "Shoot";
  button.removeAttribute("onclick");
  button.setAttribute("onclick", "hitRandomShip()");
  //hitRandomShip();

  //button.removeEventListener("click", event);
  // });
};
// startGame();

// const gameOver = () => {
//   if (shipsArr.length === 0) {
//     //button.removeEventListener("click", event);
//     allShipsContainer.innerHTML = `<h1 class="gameOver">GAME OVER</h1>`;
//     button.innerHTML = "Play again";
//     //button.addEventListener("click", startGame);
//   }
// };
// gameOver();
