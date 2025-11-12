const word = "ATLANTIS";

export function level7() {
  let letters = [];

  for(let i = 0; i < word.length; ++i) {
    cy.get("div[class='draggable-cube']").invoke('text').then((text) => {
      letters.push({ text: text });
    });
  }

  console.log(letters)
}
