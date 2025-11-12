export function level8() {
  cy.get("div[id='crystal']").click();
  const crystalButton = cy.get("button[class='crystal-outside']")
  crystalButton.click();
  crystalButton.trigger("mousedown"); 
  cy.tick(10000);
}
