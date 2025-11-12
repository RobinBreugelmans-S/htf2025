export function level9() {
  const boss = cy.get("div[class='boss']");
  const player = cy.get("div[id='character']");

  up();
}

const space = () => cy.press(Cypress.Keyboard.Keys.SPACE);
const right = () => cy.press(Cypress.Keyboard.Keys.RIGHT);
const left = () => cy.press(Cypress.Keyboard.Keys.LEFT);
const up = () => cy.press(Cypress.Keyboard.Keys.UP);
const down = () => cy.press(Cypress.Keyboard.Keys.DOWN);