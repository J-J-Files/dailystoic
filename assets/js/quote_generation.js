const quotes = [
    {
        quote: "The happiness of your life depends upon the quality of your thoughts.",
        explanation: "Marcus Aurelius reminds us to guard our thoughts, as they shape our reality."
    },
    {
        quote: "He who fears death will never do anything worth of a man who is alive.",
        explanation: "Seneca encourages us to embrace life fully, unburdened by the fear of death."
    },
    {
        quote: "You have power over your mind - not outside events. Realize this, and you will find strength.",
        explanation: "Marcus Aurelius emphasizes focusing on what you can control to find peace."
    }
];


function getCurrentQuote() {
    // Determine the day of the year to get a new quote
    const currentDate = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Chicago" }));
    const startOfYear = new Date(currentDate.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((currentDate - startOfYear) / (1000 * 60 * 60 * 24));

    // Use dayOfYear to select a quote
    const quoteIndex = dayOfYear % quotes.length;
    return quotes[quoteIndex];
}

function displayQuote() {
    const { quote, explanation } = getCurrentQuote();
    document.getElementById("quote").textContent = `"${quote}"`;
    document.getElementById("explanation").textContent = `"${explanation}"`;
}

// Display the quote when the page loads
displayQuote();
