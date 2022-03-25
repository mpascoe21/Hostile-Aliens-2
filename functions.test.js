// import { expect, test } from "@jest/globals";
// import { describe } from "yargs";

import { Ship } from "./shipClass.js";

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
