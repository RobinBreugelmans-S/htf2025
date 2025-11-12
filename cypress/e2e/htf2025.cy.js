import { disableMotion } from "./util";

Cypress.on('window:before:load', (cyWindow) => {
  disableMotion(cyWindow);
});

Cypress.on('window:load', (cyWindow) => {
  disableMotion(cyWindow);
});

describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://hackthefuture.bignited.be");
    cy.get("button[class^='center-button']").click();
    cy.wait(100);
    cy.get("div[id='female']").click();
    cy.get("button").should('contain', 'Yes').click();
  });
})
