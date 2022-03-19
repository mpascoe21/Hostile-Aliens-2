// RENDER GAME HTML

// A FUNCTION / METHOD THAT SELECTS A TARGET SHIP AT RANDOM

// CLICK EVENT ON BUTTON

// A FUNCTION / METHOD THAT DEDUCTS POINTS FROM THE TARGET SHIP -> IF POINTS = 0 -> REMOVE SHIP

// NO SHIPS LEFT = GAME OVER

// MOTHER SHIP DESTROYED = ALL SHIPS DESTROYED -> GAME OVER

//console.dir(document);
//console.log("working");
const button = document.querySelector(".button");

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
    return `<div class='ship' data-id=${this.id}>
      <h3>${this.name}</h3>
      <p>${this.id}</p>
      <p class='startPoints'>${this.startPoints}</p>
    </div>`;
  }
}

let shipsArr = [];

const motherShip = new Ship("Mother Ship", 100, 9, "S-" + 1);
shipsArr.push(motherShip);
document.querySelector("#allShipsContainer").innerHTML +=
  motherShip.renderShip();
console.log(motherShip);

for (let i = 0; i < 5; i++) {
  const defenceShip = new Ship("Defence Ship", 80, 10, "S-" + (i + 2));
  shipsArr.push(defenceShip);
  document.querySelector("#allShipsContainer").innerHTML +=
    defenceShip.renderShip();
  console.log(defenceShip);
}

for (let i = 0; i < 8; i++) {
  const attackShip = new Ship("Attack Ship", 45, 12, "S-" + (i + 7));
  shipsArr.push(attackShip);
  document.querySelector("#allShipsContainer").innerHTML +=
    attackShip.renderShip();
  console.log(attackShip);
}

console.log(shipsArr);
console.log(shipsArr[0].name); //mother ship

const allShipsHTML = document.querySelectorAll(".ship");
console.log(allShipsHTML);

const getRandomShip = () => {
  return Math.floor(Math.random() * allShipsHTML.length);
};
getRandomShip();

// console.log(getRandomShip()); // 7
// console.log(allShipsHTML[getRandomShip()].children[1].innerHTML); // S-2
// console.log(allShipsHTML[getRandomShip()]); // div with id S-8

// const randomShipIndex = getRandomShip();
// console.log(randomShipIndex);
// console.log(allShipsHTML[randomShipIndex].children[1].innerHTML);
// console.log(allShipsHTML[randomShipIndex]);

//let remainingPoints = shipsArr[].remainingPoints()
//
const hitRandomShip = () => {
  button.addEventListener("click", () => {
    const randomShipIndex = getRandomShip();
    console.log(randomShipIndex);
    const currentShip = shipsArr[randomShipIndex];
    console.log(currentShip);

    const hitShipRemainingPoints = currentShip.remainingPoints();
    console.log(hitShipRemainingPoints);

    // console.log(allShipsHTML[randomShipIndex]);
    // console.log(allShipsHTML[randomShipIndex].children[0].innerHTML);
    // console.log(allShipsHTML[randomShipIndex].children[1].innerHTML);
    // console.log(allShipsHTML[randomShipIndex].children[2].innerHTML);

    allShipsHTML[randomShipIndex].children[2].innerHTML =
      hitShipRemainingPoints;
  });
};
hitRandomShip();

// const hitRandomShip = () => {
//   button.addEventListener("click", () => {
//     const randomShipIndex = Math.floor(Math.random() * shipsArr.length);
//     const randomShipId = shipsArr[randomShipIndex].id;
//     // console.log(randomShipIndex.querySelector(randomShipId));
//     console.log(`Ship ID is: ${randomShipId}`);

//     //const currentShipHTML = document.body.dataset.id === randomShipId;
//     console.log(randomShipIndex);

//     // const shipNode = document.querySelector()
//     // console.log(randomShipIndex);
//     // console.log(shipsArr[randomShipIndex].startPoints);
//     // console.log(shipsArr[randomShipIndex].hitPoints);
//     //console.log(shipsArr[randomShipIndex]);

//     let remainingPoints = shipsArr[randomShipIndex].remainingPoints();
//     console.log(
//       `Ship Index: ${shipsArr[randomShipIndex].id}, Points remainining: ${remainingPoints}`
//     );

//     // let remainingPoints =
//     //   shipsArr[randomShipIndex].startPoints -
//     //   shipsArr[randomShipIndex].hitPoints;

//     // const motherShip = shipsArr[0].id === "S-1";

//     // if (motherShip === true && remainingPoints <= 0) {
//     //   document.querySelector("#allShipsContainer").innerHTML = "GAME OVER";
//     // } else
//     if (remainingPoints <= 30) {
//       shipsArr.splice(randomShipIndex, 1);

//       // document.querySelector("#allShipsContainer")[randomShipIndex].innerHTML =
//       //   "";

//       console.log(shipsArr);
//     } else {
//       shipsArr[randomShipIndex].startPoints = remainingPoints;
//       // console.log(shipsArr[randomShipIndex].startPoints);
//     }

//     // document.querySelector(".startPoints").innerHTML = remainingPoints;
//   });
// };
// hitRandomShip();

// // const currentShipPoints = document.querySelector(".startPoints").innerHTML;
// // console.log(currentShipPoints);

// // const allShipsArr = allShips.childNodes;
// // // allShipsArr.push(motherShip, defenceShip);
// // console.log(allShipsArr);

// // class MotherShip {
// //   // MOTHER SHIP DESTROYED = ALL SHIPS DESTROYED -> GAME OVER
// // }
