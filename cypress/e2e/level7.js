const word = "ATLANTIS";

// export function level7() {
//   let letters = cy.get(`div[class='draggable-cube']`);
//   let targets = cy.get(`div[class='target-slot']`);
//
//   for (let i = 0; i < word.length; i++) {
//     let c = word.charAt(i);
//     console.log(letters);
//   }
// }

export function level7(){
  cy.get('div.target-slot').then(($targets) => {
    let targets = $targets.toArray();

    cy.get('div.draggable-cube').then(($els) => {
      let letters = $els.toArray();
      let letter_c = letters.map(el => el.innerText);

      let monster = {};

      for (let i = 0; i < word.length; i++) {
        let char = letter_c[i];

        if (char in monster){
          monster[char].push(letters[i]);
        } else{
          monster[char] = [letters[i]];
        }
      }

      console.log(monster);

      for (let i = 0; i < word.length; i++){
        let char = word.charAt(i);

        let button = monster[char].shift();

        button.trigger("dragstart", targets[i]);
        button.trigger("drop", targets[i]);
        button.trigger("dragend", targets[i]);

      }

    });
  });
}


