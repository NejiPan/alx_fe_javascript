
const quotes = [
    { text: "The only way to do great work is to love what you do.", category: "inspiration" },
    { text: "Innovation distinguishes between a leader and a follower.", category: "business" },
    { text: "Your time is limited, don't waste it living someone else's life.", category: "life" }
];


const quoteDisplay = document.getElementById('quoteDisplay');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const addQuoteBtn = document.getElementById('addQuoteBtn');
const quoteTextInput = document.getElementById('quoteText');
const quoteCategoryInput = document.getElementById('quoteCategory');


function displayRandomQuote() {
    if (quotes.length === 0) {
        quoteDisplay.innerHTML = "<p>No quotes available. Please add some quotes.</p>";
        return;
    }

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    
    quoteDisplay.innerHTML = `
        <blockquote>"${randomQuote.text}"</blockquote>
        <p><em>— ${randomQuote.category}</em></p>
    `;
}


function addQuote() {
    const text = quoteTextInput.value.trim();
    const category = quoteCategoryInput.value.trim();

    if (!text || !category) {
        alert('Please fill in both fields');
        return;
    }

    quotes.push({ text, category });
    quoteTextInput.value = '';
    quoteCategoryInput.value = '';
    
    displayRandomQuote();
    alert('Quote added successfully!');
}


newQuoteBtn.addEventListener('click', displayRandomQuote);
addQuoteBtn.addEventListener('click', addQuote);


displayRandomQuote();