export function level1(cy){
    cy.tick(25000);
    cy.get("div[id='letters']").click();
    cy.tick(25000);
    cy.get("span[class^='close']").click();
    cy.tick(25000);
    cy.get("div[id='crystal']").click();
    cy.tick(25000);
    cy.get("div[id='image-crystal']").click();
    cy.tick(25000);
}
