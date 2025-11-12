export function level1(cy){
    cy.tick(25000);
    cy.get("div[id='letters']").click();
    cy.tick(25000);
    cy.get("div[class^='close']").click();
    cy.tick(25000);
    cy.get("div[id='crystal']").click();
    cy.tick(25000);
    cy.get("div[class^='image-crystal']");
    cy.tick(25000);
}
