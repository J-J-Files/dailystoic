function displayDate() {
    // Get the current date in Central Standard Time
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });
    
    // Format the CST date for display
    const formattedDate = new Date(currentDate).toLocaleDateString('en-US', options);

    // Display the date in the HTML element
    document.getElementById("currentDate").textContent = formattedDate;
}

// Call the function to display the date when the page loads
displayDate();