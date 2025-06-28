
const quotes = [
    { text: "The only way to do great work is to love what you do.", category: "inspiration" },
    { text: "Innovation distinguishes between a leader and a follower.", category: "business" },
    { text: "Your time is limited, don't waste it living someone else's life.", category: "life" }
];


function showRandomQuote() {
    const quoteDisplay = document.getElementById('quoteDisplay');
    if (!quoteDisplay) {
        console.error("Error: #quoteDisplay not found!");
        return;
    }

    if (quotes.length === 0) {
        quoteDisplay.textContent = "No quotes available. Add some!";
        return;
    }

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const { text, category } = quotes[randomIndex];
    quoteDisplay.innerHTML = `<blockquote>"${text}"</blockquote><p><em>— ${category}</em></p>`;
}


function addQuote() {
    const textInput = document.getElementById('newQuoteText');
    const categoryInput = document.getElementById('newQuoteCategory');

    if (!textInput || !categoryInput) {
        console.error("Error: Input fields not found!");
        return;
    }

    const text = textInput.value.trim();
    const category = categoryInput.value.trim();

    if (!text || !category) {
        alert("Please fill in both fields!");
        return;
    }

    quotes.push({ text, category });
    textInput.value = "";
    categoryInput.value = "";
    showRandomQuote(); 
    alert("Quote added successfully!");
}


document.getElementById('newQuote').addEventListener('click', showRandomQuote);


window.addEventListener('DOMContentLoaded', showRandomQuote);