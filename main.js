const vocabulary = [
    {
        word: "to be / sein",
        englishPresent: "is",
        englishPreterit: "was",
        englishPerfect: "been",
        germanPresent: "ist",
        germanImperfect: "war",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "gewesen",
    },
    {
        word: "to have / haben",
        englishPresent: "has",
        englishPreterit: "had",
        englishPerfect: "had",
        germanPresent: "hat",
        germanImperfect: "hatte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gehabt",
    },
    {
        word: "to go / gehen",
        englishPresent: "goes",
        englishPreterit: "went",
        englishPerfect: "gone",
        germanPresent: "geht",
        germanImperfect: "ging",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "gegangen",
    },
    {
        word: "to read / lesen",
        englishPresent: "reads",
        englishPreterit: "read",
        englishPerfect: "read",
        germanPresent: "liest",
        germanImperfect: "las",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gelesen",
    },
    // Add more words and their conjugations here
];

let currentWordIndex = 0;

function displayWord() {
    const wordElement = document.getElementById("word");
    wordElement.textContent = vocabulary[currentWordIndex].word;
}

function checkConjugation() {
    const englishPresentInput = document.getElementById("english-present").value.trim().toLowerCase();
    const englishPreteritInput = document.getElementById("english-preterit").value.trim().toLowerCase();
    const englishPerfectInput = document.getElementById("english-perfect").value.trim().toLowerCase();
    const germanPresentInput = document.getElementById("german-present").value.trim().toLowerCase();
    const germanImperfectInput = document.getElementById("german-imperfect").value.trim().toLowerCase();
    const germanAuxiliaryInput = document.getElementById("german-auxiliary").value.trim().toLowerCase();
    const germanPerfectInput = document.getElementById("german-perfect").value.trim().toLowerCase();

    const currentWord = vocabulary[currentWordIndex];

    const isEnglishCorrect = englishPresentInput === currentWord.englishPresent.toLowerCase() && englishPreteritInput === currentWord.englishPreterit.toLowerCase() && englishPerfectInput === currentWord.englishPerfect.toLowerCase();

    const isGermanCorrect = germanPresentInput === currentWord.germanPresent.toLowerCase() && germanImperfectInput === currentWord.germanImperfect.toLowerCase() && germanAuxiliaryInput === currentWord.germanAuxiliary.toLowerCase() && germanPerfectInput === currentWord.germanPerfect.toLowerCase();

    if (isEnglishCorrect && isGermanCorrect) {
        alert("Correct!");
    } else {
        alert("Incorrect. Try again.");
    }
}

function nextWord() {
    const randomIndex = Math.floor(Math.random() * vocabulary.length);
    while (randomIndex === currentWordIndex && vocabulary.length > 1) {
        randomIndex = Math.floor(Math.random() * vocabulary.length);
    }

    currentWordIndex = randomIndex;
    displayWord();
    clearInputs();
}

function clearInputs() {
    document.getElementById("english-present").value = "";
    document.getElementById("english-preterit").value = "";
    document.getElementById("english-perfect").value = "";
    document.getElementById("german-present").value = "";
    document.getElementById("german-imperfect").value = "";
    document.getElementById("german-auxiliary").value = "";
    document.getElementById("german-perfect").value = "";
}

document.getElementById("submit-button").addEventListener("click", () => {
    checkConjugation();
    setTimeout(nextWord, 2000);
});

document.getElementById("next-word-button").addEventListener("click", () => {
    nextWord();
});

displayWord();

// Voice setup using ResponsiveVoice.js
function setupResponsiveVoice(buttonSelector, fieldSelector, lang) {
    const button = document.querySelector(buttonSelector);
    const field = document.querySelector(fieldSelector);

    if (button && field) {
        button.addEventListener("click", () => {
            const text = field.value.trim(); // Get the value of the input field
            if (text) {
                responsiveVoice.speak(text, lang); // Speak the input text
            } else {
                alert("Please enter some text before playing the sound."); // Alert if field is empty
            }
        });
    }
}

// Setup ResponsiveVoice for German fields using "Deutsch Female"
setupResponsiveVoice("#listen-german-present", "#german-present", "Deutsch Female");
setupResponsiveVoice("#listen-german-imperfect", "#german-imperfect", "Deutsch Female");
setupResponsiveVoice("#listen-german-auxiliary", "#german-auxiliary", "Deutsch Female");
setupResponsiveVoice("#listen-german-perfect", "#german-perfect", "Deutsch Female");

// Setup ResponsiveVoice for English fields using "US English Female"
setupResponsiveVoice("#listen-english-present", "#english-present", "US English Female");
setupResponsiveVoice("#listen-english-preterit", "#english-preterit", "US English Female");
setupResponsiveVoice("#listen-english-perfect", "#english-perfect", "US English Female");
