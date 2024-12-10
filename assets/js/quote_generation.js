/* import { quotes } from './quotes_list.js'; */

const quotes = [
    {
        quote: "There is no vice which lacks a defense, none that at the outset isn’t modest and easily intervened—but after this the trouble spreads widely. If you allow it to get started you won’t be able to control when it stops. Every emotion is at first weak. Later it rouses itself and gathers strength as it moves along—it’s easier to slow it down than to supplant it.",
        explanation: "Rivers,” Publilius Syrus reminds us with an epigram, “are easiest to cross at their source.” That’s what Seneca means too. The raging waters and deadly currents of bad habits, ill discipline, chaos, and dysfunction—somewhere they began as no more than just a slight trickle. Somewhere they are a placid lake or pond, even a bubbling underground spring. Which would you rather do—nearly drown in a dangerous crossing in a few weeks or cross now while it’s still easy? It’s up to you."
    },
    {
        quote: "There is no vice which lacks a defense, none that at the outset isn’t modest and easily intervened—but after this the trouble spreads widely. If you allow it to get started you won’t be able to control when it stops. Every emotion is at first weak. Later it rouses itself and gathers strength as it moves along—it’s easier to slow it down than to supplant it.",
        explanation: "Rivers,” Publilius Syrus reminds us with an epigram, “are easiest to cross at their source.” That’s what Seneca means too. The raging waters and deadly currents of bad habits, ill discipline, chaos, and dysfunction—somewhere they began as no more than just a slight trickle. Somewhere they are a placid lake or pond, even a bubbling underground spring. Which would you rather do—nearly drown in a dangerous crossing in a few weeks or cross now while it’s still easy? It’s up to you."
    },
    {
        quote: "There is no vice which lacks a defense, none that at the outset isn’t modest and easily intervened—but after this the trouble spreads widely. If you allow it to get started you won’t be able to control when it stops. Every emotion is at first weak. Later it rouses itself and gathers strength as it moves along—it’s easier to slow it down than to supplant it.",
        explanation: "Rivers,” Publilius Syrus reminds us with an epigram, “are easiest to cross at their source.” That’s what Seneca means too. The raging waters and deadly currents of bad habits, ill discipline, chaos, and dysfunction—somewhere they began as no more than just a slight trickle. Somewhere they are a placid lake or pond, even a bubbling underground spring. Which would you rather do—nearly drown in a dangerous crossing in a few weeks or cross now while it’s still easy? It’s up to you."
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
