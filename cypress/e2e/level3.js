const dict = {
  "https://hackthefuture.bignited.be/images/submarine/up.png": Cypress.Keyboard.Keys.UP,
  "https://hackthefuture.bignited.be/images/submarine/left.png": Cypress.Keyboard.Keys.LEFT,
  "https://hackthefuture.bignited.be/images/submarine/right.png": Cypress.Keyboard.Keys.RIGHT,
  "https://hackthefuture.bignited.be/images/submarine/down.png": Cypress.Keyboard.Keys.DOWN
}

export function level3() {
  for (let i = 0; i < 10; ++i) {
    cy.tick(25000);
    cy.get("img[class='arrow']").then(($el) => {
      console.log($el[0].src)
      cy.press(dict[$el[0].src]);
      cy.tick(25000);
    });
  }
}

