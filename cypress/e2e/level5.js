export function level5() {
  cy.tick(25000);

  for (let i = 1; i <= 4; i++){
    let button = cy.get(`div[class^='square-${i}']`);
    button.click();
    cy.tick(25000);
  }
  cy.tick(25000);
}
