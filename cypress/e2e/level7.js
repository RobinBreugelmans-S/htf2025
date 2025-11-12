const word = "ATLANTIS";

export function level7() {
  cy.get('div.target-slot').then(($targets) => {
    let targets = $targets.toArray();
    targets = targets.map((t) => cy.wrap(t));

    cy.get('div.draggable-cube').then(($els) => {
      let letters = $els.toArray();
      let letter_c = letters.map(el => el.innerText);

      let monster = {};

      for (let i = 0; i < word.length; i++) {
        let char = letter_c[i];

        if (char in monster){
          monster[char].push(cy.wrap(letters[i]));
        } else {
          monster[char] = [cy.wrap(letters[i])];
        }
      }

      console.log(monster);

      for (let i = 0; i < word.length; i++){
        let char = word.charAt(i);

        let button = monster[char].shift();
        
        const dataTransfer = new DataTransfer;
        button.trigger("dragstart", { dataTransfer });
        targets[i].trigger("drop", { dataTransfer });
        button.trigger("dragend", { dataTransfer });
      }
    });
  });
}


