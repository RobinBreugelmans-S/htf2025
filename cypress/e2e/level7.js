const word = "ATLANTIS";

export function level7() {
  for(let i = 0; i < word.length; ++i) {
    let letters = cy.get(`div.draggable-cube[data-letter='${word[i]}']`);
    let targets = cy.get(`div.target-slot[data-letter='${word[i]}']`);
    
    if (!Array.isArray(letters)) {
      letters = [letters];
      targets = [targets];
    }
    
    const dataTransfer = new DataTransfer;
    for (let j = 0; j < letters.length;) {
      // letters[j].trigger("dragstart", { dataTransfer });
      // targets[j].trigger("drop", { dataTransfer });
      // letters[j].trigger("dragend", { dataTransfer });
    }
  }
}
