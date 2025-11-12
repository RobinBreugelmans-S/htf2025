export function level5() {
  cy.tick(25000);
  let max = 1;

  for (let i = 0; i < max; i++){
    let button = cy.get(`div[id='square-${i}']`);
    let button2 = cy.get(`div[id='square-${i}']`);

    button.trigger('mouseover', {force: true});
    cy.tick(25000);
    button.invoke('attr', 'class').then((classes) => {
      console.log(classes);
      if(classes.includes("active")){
        button2.dblclick({force: true});
        cy.tick(25000);
      } else{
        max++;
      }
    });
  }
  cy.tick(25000);
}

