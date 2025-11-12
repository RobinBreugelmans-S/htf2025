const word = "ATLANTIS";

export function level7() {
  for(let i = 0; i < word.length; ++i) {
    let letter = cy.get(`div[class='draggable-cube', data-letter='${word[i]}']`);
    let target = cy.get(`div[class='target-slot', data-letter='${word[i]}']`);
    
    if (!Array.isArray(letter)) {
      letter = [letter];
      target = [target];
    }
    
    const dataTransfer = new DataTransfer;
    for (let j = 0; j < letter.length;) {
      letter[j].trigger('dragstart', { dataTransfer });
      target[j].trigger('drop', { dataTransfer });
      letter[j].trigger('dragend', { dataTransfer });
    }
  }
}
