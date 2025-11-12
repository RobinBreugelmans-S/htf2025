const space = () => cy.press(Cypress.Keyboard.Keys.SPACE);
const right = () => cy.press(Cypress.Keyboard.Keys.RIGHT);
const left = () => cy.press(Cypress.Keyboard.Keys.LEFT);
const up = () => cy.press(Cypress.Keyboard.Keys.UP);
const down = () => cy.press(Cypress.Keyboard.Keys.DOWN);

export function level9() {
  const boss = cy.get("div[class='boss']");
  const player = cy.get("div[id='character']");
  
  const bullet = cy.get("app-bullet");

  up(); // press any key to start
  
  up();
  up();
  up();
  up();
  up();

  right();
  right();
  right();
  right();
  space();
  space();
  space();
  space();
  space();
  space();
  space();
  space();
  space();
  space();
  space();
  space();
  left();
}
