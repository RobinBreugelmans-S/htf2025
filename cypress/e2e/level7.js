const word = "ATLANTIS";

export function level7() {
  cy.get('div.target-slot').then(($targets) => {
    let targets = $targets.toArray();
    targets = targets.map((t) => cy.wrap(t));

    cy.get('div.draggable-cube').then(($els) => {
      let letters = $els.toArray();
      let letter_char = letters.map(el => el.innerText);

      let dict = {};

      for (let i = 0; i < word.length; i++) {
        let char = letter_char[i];

        if (char in dict){
          dict[char].push(cy.wrap(letters[i]));
        } else {
          dict[char] = [cy.wrap(letters[i])];
        }
      }

      console.log(dict);

      for (let i = 0; i < word.length; i++){
        let char = word.charAt(i);

        let button = dict[char].shift();
        
        const dataTransfer = new DataTransfer;
        button.trigger("dragstart", { dataTransfer });
        targets[i].trigger("drop", { dataTransfer });
        button.trigger("dragend", { dataTransfer });
      }
    });
  });

  cy.tick(20000);
}
