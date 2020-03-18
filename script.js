function game() {
  function compPlay() {
    let actions = ["Rock", "Paper", "Scissors"];
    let randAct = actions[Math.floor(Math.random() * actions.length)];
    return randAct;
  }
  i = 0;
  while (i < 5) {
    const playerSelect = prompt("What's your move? Rock, paper, or scissors?");
    const compSelect = compPlay();
    playGame(playerSelect, compSelect);
    i++;

    function playGame(playerSelect, compSelect) {
      if (playerSelect == playerSelect.match(/rock/i) && compSelect == "Rock") {
        return "Tie! No winner or loser here.";
      } else if (
        playerSelect == playerSelect.match(/paper/i) &&
        compSelect == "Paper"
      ) {
        return "Tie! No winner or loser here.";
      } else if (
        playerSelect == playerSelect.match(/scissors/i) &&
        compSelect == "Scissors"
      ) {
        return "Tie! No winner or loser here.";
      } else if (
        playerSelect == playerSelect.match(/rock/i) &&
        compSelect == "Paper"
      ) {
        return "Loser! Paper beats rock.";
      } else if (
        playerSelect == playerSelect.match(/paper/i) &&
        compSelect == "Scissors"
      ) {
        return "Loser! Scissors beats paper.";
      } else if (
        playerSelect == playerSelect.match(/scissors/i) &&
        compSelect == "Rock"
      ) {
        return "Loser! Rock beats scissors.";
      } else if (
        playerSelect == playerSelect.match(/rock/i) &&
        compSelect == "Scissors"
      ) {
        return "Winner! Rock beats scissors.";
      } else if (
        playerSelect == playerSelect.match(/paper/i) &&
        compSelect == "Rock"
      ) {
        return "Winner! Paper beats rock.";
      } else {
        playerSelect == playerSelect.match(/scissors/i) &&
          compSelect == "Paper";

        return "Winner! Scissors beats paper.";
      }
    }
    console.log(playGame(playerSelect, compSelect));
  }
}

game();
