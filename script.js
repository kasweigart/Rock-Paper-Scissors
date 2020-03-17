function computerPlay() {
    let action = ['Rock', 'Paper', 'Scissors'];
    return Math.floor(Math.random() * action.length);
}

console.log(computerPlay());