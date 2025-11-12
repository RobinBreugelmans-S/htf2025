import { disableMotion } from "./util";

Cypress.on('window:before:load', (cyWindow) => {
  //disableMotion(cyWindow);
});

describe("template spec", () => {
  before(() => {
    cy.clock();
  })

  it("passes", () => {
    cy.visit("https://hackthefuture.bignited.be");
    cy.get("button[class^='center-button']").click();
    cy.tick(25000);
    cy.get("div[id='female']").click();
    cy.tick(1000);
    cy.get("button[class='btn btn-primary']").click();
    cy.tick(200000);

    cy.get
  });
})
