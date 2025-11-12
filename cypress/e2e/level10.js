export function level10() {
    cy.tick(25000);
    cy.get("div[class^='btn']").click();
}
