export function level8() {
  cy.get("dev[id='crystal']").click();
  const crystalButton = cy.get("button[class='crystal-outside']")
  crystalButton.click();
  crystalButton.trigger("mousedown"); 
  /*, {
  button: 0,
  } */
  cy.tick(10000);
  crystalButton.trigger("mouseup");
}
