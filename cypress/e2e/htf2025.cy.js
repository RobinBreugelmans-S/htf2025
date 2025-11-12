describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://hackthefuture.bignited.be");
    cy.get("button[class^='center-button']").click();
    cy.wait(20000);
    cy.get("div[id='female']").click();
    cy.wait(1000);
    cy.get("button").should('contain', 'Yes').click();
  });
})
