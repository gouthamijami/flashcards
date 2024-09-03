function createFlashcard(question, answer) {
    var container = document.createElement('div');
    container.className = 'flashcard-container';
    container.onclick = function() {
        this.querySelector('.flashcard').classList.toggle('flip');
    };

    var card = document.createElement('div');
    card.className = 'flashcard';

    var inner = document.createElement('div');
    inner.className = 'flashcard-inner';

    var front = document.createElement('div');
    front.className = 'flashcard-front';
    front.textContent = question;

    var back = document.createElement('div');
    back.className = 'flashcard-back';
    back.textContent = answer;

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);
    container.appendChild(card);

    document.getElementById('flashcard-area').appendChild(container);
}

// Example data
const sampleData = [
    ["What is the capital of France?", "Paris"],
    ["What is 2 + 2?", "4"],
    ["What is the largest planet?", "Jupiter"]
];

sampleData.forEach(([question, answer]) => {
    createFlashcard(question, answer);
});
