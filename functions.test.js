// import { expect, test } from "@jest/globals";
// import { describe } from "yargs";
import {
  //   buildGame,
  getRandomShip,
  //   hitRandomShip,
  //   gameOver,
  //   startGame,
} from "./functions.js";
import { Ship } from "./shipClass.js";
//import { shipsArr } from './script.js'

// describe("Test if a random index of the shipsArr is being returned", () => {
//   test("Should return a random number between 0 and 13", () => {
//     expect(getRandomShip())toBe(;
//   });
// });

// describe("Test if ships are being created and pushed to the shipsArr", () => {
//   test("motherShip", () => {
//     const motherShip = new Ship("Mother Ship", 100, 9, "S-" + 1);
//     expect(buildGame).toBe();
//   });
// });

describe("Test Ship class", () => {
  test("Should return: name, startPoints, hitPoints, id", () => {
    const ship = new Ship("Mother Ship", 100, 9, "S-1");
    expect(ship.renderShip()).toBe(`<div class="ship" id="S-1">
      <h3>Mother Ship</h3>
      <p>S-1</p>
      <p class='startPoints'>100</p>
    </div>`);
  });
});
