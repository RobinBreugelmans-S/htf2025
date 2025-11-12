export function doLogin() {
    cy.visit("https://hackthefuture.bignited.be");
    cy.get("button[class='center-button']").click();
    cy.tick(25000);
    cy.get("div[id='female']").click();
    cy.tick(1000);
    cy.get("button[class='btn btn-primary']").click();
    cy.tick(200000);

    cy.get("input[type='text']").type("C");
    cy.get("input[type='number']").type("1");
    cy.get("select").select("Finland");
    cy.get("button[class='btn btn-primary center-button']").click();
}