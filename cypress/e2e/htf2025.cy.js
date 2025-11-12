import { disableMotion } from "./util";
import { doLogin } from "./login";
import { doLevel1 } from "./level1";
import { doLevel2 } from "./level2";

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
    doLevel1();
    doLevel2();
  });
})
