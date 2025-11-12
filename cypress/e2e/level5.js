export function level5() {
  cy.tick(25000);

  try{
    for (let i = 0; i < 4; i++){
      let button = cy.get(`div[id='square-${i}']`);
      let button2 = cy.get(`div[id='square-${i}']`);

      button.trigger('mouseover', {force: true});
      cy.tick(25000);

      button.invoke('attr', 'class').then((classes) => {
        if(classes.includes("active")) button2.dblclick({force: true});
      });
    }
  } catch(e){}

  cy.tick(25000);
}
