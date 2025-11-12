export function level4() {
    cy.tick(25000);
    cy.get("div[class='square']").click().click();
    cy.tick(25000);
}
