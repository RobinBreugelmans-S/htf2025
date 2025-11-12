import { disableMotion } from "./util";
import { doLogin } from "./login";
import { level1 } from "./level1";
import { level3 } from "./level3";
import { level4 } from "./level4";
import { level5 } from "./level5";

Cypress.on('window:before:load', (cyWindow) => {
  //disableMotion(cyWindow);
});

Cypress.on('window:load', (cyWindow) => {
  disableMotion(cyWindow);
});

describe("template spec", () => {
  before(() => {
    cy.clock();
  })

  it("passes", () => {
    doLogin();
    level1(cy);
    level3();
    level4();
    level5();
  });
})
