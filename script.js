let quotes = [
    { text: "The only way to do great work is to love what you do.", category: "inspiration" },
    { text: "Innovation distinguishes between a leader and a follower.", category: "business" },
    { text: "Your time is limited, don't waste it living someone else's life.", category: "life" },
    { text: "Stay hungry, stay foolish.", category: "inspiration" },
    { text: "The journey of a thousand miles begins with one step.", category: "life" }
];

const quoteDisplay = document.getElementById('quoteDisplay');
const newQuoteBtn = document.getElementById('newQuote');
const categorySelect = document.getElementById('categorySelect');
const newQuoteText = document.getElementById('newQuoteText');
const newQuoteCategory = document.getElementById('newQuoteCategory');

function init() {
    newQuoteBtn.addEventListener('click', showRandomQuote);
    updateCategoryFilter();
    showRandomQuote();
}

function showRandomQuote() {
    const selectedCategory = categorySelect.value;
    let filteredQuotes = quotes;
    
    if (selectedCategory !== 'all') {
        filteredQuotes = quotes.filter(quote => quote.category === selectedCategory);
    }
    
    if (filteredQuotes.length === 0) {
        quoteDisplay.innerHTML = `<p>No quotes found in the selected category.</p>`;
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    const randomQuote = filteredQuotes[randomIndex];
    
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
    
    const newQuote = { text, category };
    quotes.push(newQuote);
    
    newQuoteText.value = '';
    newQuoteCategory.value = '';
    
    updateCategoryFilter();
    showRandomQuote();
    alert('Quote added successfully!');
}

function updateCategoryFilter() {
    const categories = [...new Set(quotes.map(quote => quote.category))];
    const currentSelection = categorySelect.value;
    
    categorySelect.innerHTML = '<option value="all">All Categories</option>';
    
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
    
    if (categories.includes(currentSelection)) {
        categorySelect.value = currentSelection;
    }
}

document.addEventListener('DOMContentLoaded', init);