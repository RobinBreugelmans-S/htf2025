dict = {
  "images/submarine/up.png": Cypress.Keyboard.Keys.UP,
  "images/submarine/left.png": Cypress.Keyboard.Keys.LEFT,
  "images/submarine/right.png": Cypress.Keyboard.Keys.RIGHT,
  "images/submarine/down.png": Cypress.Keyboard.Keys.DOWN
}

export function level3(){
    cy.tick(25000);
    cy.get("div[class^='arrow']").then(($el) => {
      cy.press(dict[$el.scr]);
      cy.tick(25000);
    });
}

