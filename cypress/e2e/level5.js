export function level5(){
  cy.tick(25000);
  console.log("level5");

  for (let i = 0; i < 4; i++){
    let button = cy.get(`div[id^='square-${i}']`);
    button.trigger('mouseover', {force: true});
    cy.tick(25000);
    console.log(button.attr('class'));
    let crystal = cy.get(`div[id='crystal']`);
    console.log(crystal);
  }
  cy.tick(25000);
}
