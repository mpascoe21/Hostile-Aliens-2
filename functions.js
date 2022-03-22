export const buildGame = () => {
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

export const getRandomShip = () => {
  return Math.floor(Math.random() * shipsArr.length);
};
//getRandomShip();

export const hitRandomShip = () => {
  //console.log(shipsArr);
  const randomShipIndex = getRandomShip();
  //console.log(randomShipIndex + "  randomShipIndex");
  const currentShip = shipsArr[randomShipIndex];
  //console.log(currentShip);
  //console.log(currentShip.id + "  currentShip.id");
  const HTMLShip = document.getElementById(currentShip.id);
  //console.log(HTMLShip);

  const hitShipRemainingPoints = currentShip.remainingPoints();
  //console.log(hitShipRemainingPoints + "  hit ship remaining points");

  HTMLShip.children[2].innerHTML = hitShipRemainingPoints;

  if (hitShipRemainingPoints <= 40) {
    shipsArr.splice(randomShipIndex, 1);
    //console.log(shipsArr);
    const HTMLShipToRemove = document.getElementById(currentShip.id);
    //console.log(HTMLShipToRemove);
    HTMLShipToRemove.remove();
  }
  gameOver();
};

export const gameOver = () => {
  if (shipsArr.length === 0) {
    allShipsContainer.innerHTML = `<h1 class="gameOver">GAME OVER</h1>`;
    button.innerHTML = "Play again";
    button.removeAttribute("onclick");
    button.setAttribute("onclick", "startGame()");
  }
};

export const startGame = () => {
  allShipsContainer.innerHTML = "";
  const launchMessage = document.querySelector(".launchMessage");
  launchMessage.innerHTML = "";
  buildGame();
  getRandomShip();
  button.innerHTML = "Shoot";
  button.removeAttribute("onclick");
  button.setAttribute("onclick", "hitRandomShip()");
};
