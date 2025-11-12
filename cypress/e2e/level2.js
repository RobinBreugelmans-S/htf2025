export function level2() {
    for (let i = 0; i < 5; ++i) {
        cy.get(`div[id='randomValue-${i}']`).then($el => {
            clickSwitch(i, $el.text().trim() == "1" ? 1 : 2);
        });
    }
    cy.get("div[id='release-div'] > button").click();
    cy.get("div[id='submarine']").click();
}

function clickSwitch(id, times) {
    const button = cy.get(`div[id='switch-${id}'] > div`);
    for (let i = 0; i < times; ++i) {
        button.click();
    }
}
