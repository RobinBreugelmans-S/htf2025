describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://hackthefuture.bignited.be");
    cy.get("button[class^='center-button']").click();
    cy.wait(20000);
    cy.get("div[id='female']").click();
  });
})
