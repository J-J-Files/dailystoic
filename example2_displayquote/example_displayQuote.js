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

// Function to display the quote and its explanation
function displayQuote(index) {

    // Select the quote and explanation elements by their IDs
    const quoteElement = document.getElementById("quote");
    const explanationElement = document.getElementById("explanation");

    // Set the content of the quote and explanation
    quoteElement.textContent = quotes[index].quote;
    explanationElement.textContent = quotes[index].explanation;
}

// Function to get the quote index based on the current day of the year
function getQuoteIndexForToday() {
    const quotesLength = 3; // Number of quotes in the array
    const today = new Date(); 
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));

    // Return the index based on the current day of the year, wrapping around if necessary
    return dayOfYear % quotesLength;
}

// Display the quote for today when the page loads
document.addEventListener("DOMContentLoaded", function() {
    const indexForToday = getQuoteIndexForToday();
    displayQuote(indexForToday);
});
