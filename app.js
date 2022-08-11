import { getGames, createGame } from './fetch-utils.js';
import { renderGame } from './render-utils.js';

const currentGameEl = document.getElementById('current-game-container');
const pastGamesEl = document.getElementById('past-games-container');
const logoutButton = document.getElementById('logout');

const nameForm = document.getElementById('name-form');
const teamOneAddButton = document.getElementById('team-one-add-button');
const teamTwoAddButton = document.getElementById('team-two-add-button');
const teamOneSubtractButton = document.getElementById('team-one-subtract-button');
const teamTwoSubtractButton = document.getElementById('team-two-subtract-button');
const finishGameButton = document.getElementById('finish-game-button');
const teamOneLabel = document.getElementById('team-one-name');
const teamTwoLabel = document.getElementById('team-two-name');


// checkAuth();

let name1 = '';
let name2 = '';
let score1 = 0;
let score2 = 0;

    
nameForm.addEventListener('submit', (e) => {
    // don't forget to prevent the default form behavior!
    e.preventDefault();
    // get the name data from the form
    const data = new FormData(nameForm);
    // set the state to this data from the form
    debugger;
    name1 = data.get('team-one');
    name2 = data.get('team-two');
    console.log(name2);
    // reset the form values
    //name1 = '';
    //name2 = '';
    //resetGameData();
    displayCurrentGameEl();
    console.log(name1);
    debugger;
    nameForm.reset();
});

teamOneAddButton.addEventListener('click', () => {
    // increment the current state for team one's score
    //currentGameEl.textContent = '';
    score1++;
    //score1 = score1.value;
    displayCurrentGameEl();
});

teamTwoAddButton.addEventListener('click', () => {
    // increment the current state for team two's score
    //currentGameEl.textContent = '';
    score1--;
    displayCurrentGameEl();
});

teamOneSubtractButton.addEventListener('click', () => {
    // decrement the current state for team one's score
    //currentGameEl.textContent = '';
    score2++;
    displayCurrentGameEl();
});

teamTwoSubtractButton.addEventListener('click', () => {
    // decrement the current state for team two's score
    //currentGameEl.textContent = '';
    score2--;
    displayCurrentGameEl();
});

finishGameButton.addEventListener('click', async () => {
    // create a new game using the current game state
    
    
    /*const response = await client.from('games').insert(game);
    // after creating this new game, re-fetch the games to get the updated state and display them (hint: call displayAllGames())
    const game = {
        name_1: name1,
        name_2: name2,
        score_1: score1,
        score_2: score2
    };*/
    //const response = await createGame(game);

});

// on load . . .
window.addEventListener('', async () => {
    // display all past games (hint: call displayAllGames())
});

function displayCurrentGameEl() {
    
    //currentGameEl.textContent = '';
    
    const currentGame = {
        name1: '',
        name2: '',
        score1: 0,
        score2: 0,
    };

    // clear out the current game div
    
    
    //currentGameEl.textContent = '';
    // change the label to show team one's name;
    teamOneLabel.textContent = name1;
    // change the label to show team two's name;
    teamTwoLabel.textContent = name2;
    // call the render game function to create a game element
    const currentGameEl = renderGame(currentGame);

    // append the element to the cleared out current game div

    
    
    currentGameEl.append(currentGame);
    console.log('sup fools');
    //currentGameEl.textContent = renderGame(name1, name2, score1, score2);
}

function displayAllGames() {
    // clear out the past games list in the DOM
    // FETCH ALL GAMES from supabase
    // loop through the past games
    // render and append a past game for each past game in state
}

displayCurrentGameEl();

/*function resetGameData() {
    teamOneInputField = '';
    teamTwoInputField = '';
    name1.textContent = '';
    name2.textContent = '';
    score1.textContent = 0;
    score2.textContent = 0;
}*/

// get current game to display 
// votes
// get current game to past games
// send it to supabase