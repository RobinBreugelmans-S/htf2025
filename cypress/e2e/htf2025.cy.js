import { disableMotion } from "./util";
import { doLogin } from "./login";
import { level1 } from "./level1";
import { level2 } from "./level2";
import { level3 } from "./level3";
import { level4 } from "./level4";
import { level5 } from "./level5";
import { level7 } from "./level7";
import { level10 } from "./level10";

Cypress.on('window:load', (cyWindow) => {
  disableMotion(cyWindow);
});

describe("template spec", () => {
  before(() => {
    cy.clock();
    console.clear();
  })

  it("passes", () => {
    cy.viewport(1920, 1080);
    doLogin();
    level1();
    level2();
    level3();
    level4();
    level5();
    level7();
    level10();
  });
})
