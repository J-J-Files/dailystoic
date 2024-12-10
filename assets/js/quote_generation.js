
import * from './quotes_list.js';


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
