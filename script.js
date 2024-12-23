const prompts = [
    "I gave birth to a baby, but it wasn't just a baby. It was ___.",
    "The one thing that got me through Freshman year of highschool was ___.",
    "On Halloween, I was ___.",
    "My preschool banned ___",
    "The vote has concluded. The 2024 US president will be ___.",
    "My mommy said I'm ___.",
    "Work needed: Cooks, waiters, and ___.",
    "Star Wars, Return of ___."
];

const cards = [
    "Adolf Hitler, commander of the German Reich",
    "a gorilla",
    "Buzz Lightyear from Brawl Stars",
    "getting a low taper fade",
    "the monopoly man",
    "Jimmy Beast",
    "a sandwich",
    "gambling my left testicle",
    "the asians",
    "having a seizure",
    "Walmart",
    "Mr. Potato Head",
    "tentacles in places where there shouldn't be tentacles",
    "the voices in my head",
    "the pedophiles"
];

let currentCards = [];
let history = []; // Array to store past combinations

function capitalizeEachWord(text) {
    return text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

function getRandomPrompt() {
    const index = Math.floor(Math.random() * prompts.length);
    return prompts[index];
}

function getRandomCards() {
    const shuffled = [...cards].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 8).map(capitalizeEachWord);
}

function chooseCard(cardIndex) {
    const chosenCard = cards[cards.findIndex(item => new RegExp(currentCards[cardIndex], 'i').test(item))];
    const currentPrompt = document.getElementById('promptText').textContent;

    // Replace the blank with the chosen card in sentence case
    const filledPrompt = currentPrompt.replace("___", chosenCard);

    // Add the filled sentence to the history
    history.push(filledPrompt);
    updateHistory();

    // Start a new game round
    startGame();
}

function updateHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = ""; // Clear existing history
    history.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item; // Show the full sentence
        historyList.appendChild(li);
    });
}

function startGame() {
    // Load a random prompt
    document.getElementById('promptText').textContent = getRandomPrompt();

    // Load 8 random cards
    currentCards = getRandomCards();
    const cardElements = document.querySelectorAll('.card');
    cardElements.forEach((card, index) => {
        card.textContent = currentCards[index];
    });
}

// Start the game
startGame();
