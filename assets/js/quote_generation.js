/* import { quotes } from './quotes_list.js'; */

const quotes = [
    {
        title: "CONTROL AND CHOICE",
        quote:"The chief task in life is simply this: to identify and separate matters so that I can say clearly to myself which are externals not under my control, and which have to do with the choices I actually control. Where then do I look for good and evil? Not to uncontrollable externals, but within myself to the choices that are my own . . . —EPICTETUS, DISCOURSES, 2.5.4–5", 
        explanation: "The \"single\" most important practice in Stoic philosophy is differentiating between what we can change and what we can’t. What we have influence over and what we do not. A flight is delayed because of weather—no amount of yelling at an airline representative will end a storm. No amount of wishing will make you taller or shorter or born in a different country. No matter how hard you try, you can’t make someone like you. And on top of that, time spent hurling yourself at these immovable objects is time not spent on the things we can change. The recovery community practices something called the Serenity Prayer &quot;God, grant me the serenity to accept the things I cannot change, the courage to change the things I can, and the wisdom to know the difference.&quot; Addicts cannot change the abuse suffered in childhood. They cannot undo the choices they have made or the hurt they have caused. But they can change the future—through the power they have in the present moment. As Epictetus said, they can control the choices they make right now. The same is true for us today. If we can focus on making clear what parts of our day are within our control and what parts are not, we will not only be happier, we will have a distinct advantage over other people who fail to realize they are fighting an unwinnable battle." 
    },

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
    const { title, quote, explanation } = getCurrentQuote();
    document.getElementById("title").textContent = `"${title}"`;
    document.getElementById("quote").textContent = `"${quote}"`;
    document.getElementById("explanation").textContent = `"${explanation}"`;
}

// Display the quote when the page loads
displayQuote();
