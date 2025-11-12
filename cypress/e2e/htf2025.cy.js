import { disableMotion } from "./util";
import { doLogin } from "./login";
import { level1 } from "./level1";

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
  });
})
