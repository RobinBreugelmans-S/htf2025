export function level7() {
  const word = "ATLANTIS";
  for(let i = 0; i < word.length; ++i) {
    const letter = cy.get(`div[class='draggable-cube', data-letter='${word[i]}']`);
    const target = cy.get(`div[class='target-slot', data-letter='${word[i]}']`);
    
    const dataTransfer = new DataTransfer;
    if (Array.isArray(letter)) {
      for (let j = 0; j < letter.length;) {
        letter[j].trigger('dragstart', { dataTransfer });
        target[j].trigger('drop', { dataTransfer });
        letter[j].trigger('dragend', { dataTransfer });
      }
    } else {
      letter.trigger('dragstart', { dataTransfer });
      target.trigger('drop', { dataTransfer });
      letter.trigger('dragend', { dataTransfer });
    }
  }
}
