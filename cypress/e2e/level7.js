const word = "ATLANTIS";

export function level7() {
  for(let i = 0; i < word.length; ++i) {
    let letters = cy.get(`div.draggable-cube[data-letter='${word[i]}']`);
    let targets = cy.get(`div.target-slot[data-letter='${word[i]}']`);
    
    letters.then(($letters => {
      for (let j = 0; j < $letters.length; ++j) {
        const letter = cy.wrap($letters[j]);
        // letter.trigger("dragstart", { dataTransfer });
        
        targets.then(($targets => {
          const target = cy.wrap($targets[j]);
          letter.drag(target);
          // target.trigger("drop", { dataTransfer });
        }));

        // letter.trigger("dragend", { dataTransfer });
      }
    }));

    
    const dataTransfer = new DataTransfer;
    for (let j = 0; j < letters.length; ++j) {
      letters[j].trigger("dragstart", { dataTransfer });
      targets[j].trigger("drop", { dataTransfer });
      letters[j].trigger("dragend", { dataTransfer });
    }
  }
}
