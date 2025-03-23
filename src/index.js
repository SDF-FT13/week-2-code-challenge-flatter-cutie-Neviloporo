// // Your code here  
 
document.addEventListener("DOMContentLoaded", () => {
  const characterBar = document.getElementById("character-bar");
  const characterName = document.getElementById("name");
  const characterImage = document.getElementById("image");
  const voteCount = document.getElementById("vote-count");
  const votesForm = document.getElementById("votes-form");
  const votesInput = document.getElementById("votes");
  const resetButton = document.getElementById("reset-btn");
  const baseURL = "http://localhost:3000/characters";
  let currentCharacter = null;


  fetch(baseURL)
      .then(response => response.json())
      .then(characters => {
          characters.forEach(character => {
              const span = document.createElement("span");
              span.textContent = character.name;
              span.addEventListener("click", () => displayCharacter(character));
              characterBar.appendChild(span);
          });
      });


  function displayCharacter(character) {
      currentCharacter = character;
      characterName.textContent = character.name;
      characterImage.src = character.image;
      voteCount.textContent = character.votes;
  }

  votesForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (currentCharacter) {
          let newVotes = parseInt(votesInput.value) || 0;
          currentCharacter.votes += newVotes;
          voteCount.textContent = currentCharacter.votes;
          votesInput.value = "";
      }
  });

  resetButton.addEventListener("click", () => {
      if (currentCharacter) {
          currentCharacter.votes = 0;
          voteCount.textContent = "0";
      }
  });
});






