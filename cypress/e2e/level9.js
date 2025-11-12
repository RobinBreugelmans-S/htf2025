const space = () => cy.press(Cypress.Keyboard.Keys.SPACE);
const right = () => cy.press(Cypress.Keyboard.Keys.RIGHT);
const left = () => cy.press(Cypress.Keyboard.Keys.LEFT);
const up = () => cy.press(Cypress.Keyboard.Keys.UP);
const down = () => cy.press(Cypress.Keyboard.Keys.DOWN);

export function level9() {
  // const boss = cy.get("div[class='boss']");
  // const player = cy.get("div[id='character']");
  
  // const bullet = cy.get("app-bullet");
  cy.tick(12000);

  times(6, up);

  times(4, right);
  times(12, space);
  left();
}

function times(times, func) {
  for (let i = 0; i < times; ++i) func();
}