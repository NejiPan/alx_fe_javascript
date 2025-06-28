const quotes = [
    { text: "The only way to do great work is to love what you do.", category: "inspiration" },
    { text: "Innovation distinguishes between a leader and a follower.", category: "business" },
    { text: "Your time is limited, don't waste it living someone else's life.", category: "life" }
];

const quoteDisplay = document.getElementById('quoteDisplay');
const newQuoteBtn = document.getElementById('newQuote');
const addQuoteBtn = document.getElementById('addQuoteBtn');
const newQuoteText = document.getElementById('newQuoteText');
const newQuoteCategory = document.getElementById('newQuoteCategory');

function displayRandomQuote() {
    if (quotes.length === 0) {
        quoteDisplay.innerHTML = "<p>No quotes available. Please add some quotes.</p>";
        return;
    }

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    
    quoteDisplay.innerHTML = `
        <blockquote>"${randomQuote.text}"</blockquote>
        <p><em>- ${randomQuote.category}</em></p>
    `;
}

function addQuote() {
    const text = newQuoteText.value.trim();
    const category = newQuoteCategory.value.trim();

    if (!text || !category) {
        alert('Please enter both quote text and category');
        return;
    }

    quotes.push({ text, category });
    newQuoteText.value = '';
    newQuoteCategory.value = '';
    
    displayRandomQuote();
    alert('Quote added successfully!');
}

newQuoteBtn.addEventListener('click', displayRandomQuote);
addQuoteBtn.addEventListener('click', addQuote);

displayRandomQuote();