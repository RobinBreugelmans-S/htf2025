export function level4() {
  cy.get("div[class='square']").dblclick({force: true});
  cy.tick(25000);
}
